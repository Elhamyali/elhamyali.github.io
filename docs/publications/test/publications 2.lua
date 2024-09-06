-- This is `publications-section.lua`

-- Helper function to check the type of reference (e.g., article, book)
local function is_type(ref, ref_type)
  return ref.type == ref_type
end

-- Helper function to sort references by year (descending)
local function sort_by_year(a, b)
  return (a.year or 0) > (b.year or 0)
end

function Pandoc(doc)
  local references = pandoc.utils.references(doc)

  -- Filter and sort references
  local articles = references:filter(function(ref) return is_type(ref, 'article') end)
  local books = references:filter(function(ref) return is_type(ref, 'book') end)

  -- Sort references by year
  articles:sort(sort_by_year)
  books:sort(sort_by_year)

  -- Format publication sections
  local article_blocks = { pandoc.Header(1, 'Articles') }
  local book_blocks = { pandoc.Header(1, 'Books') }

  -- Format each entry and add it to the blocks
  for i, article in ipairs(articles) do
    table.insert(article_blocks, pandoc.Para({
      pandoc.Str("[" .. i .. "] "), pandoc.Strong(article.author[1].family),
      pandoc.Str(". "), pandoc.Emph(article.title),
      pandoc.Str(". "), pandoc.Str("(" .. article.year .. "). "),
      pandoc.Str(article.journal or ""),
      article.doi and pandoc.Link("DOI", "https://doi.org/" .. article.doi) or ""
    }))
  end

  for i, book in ipairs(books) do
    table.insert(book_blocks, pandoc.Para({
      pandoc.Str("[" .. i .. "] "), pandoc.Strong(book.author[1].family),
      pandoc.Str(". "), pandoc.Emph(book.title),
      pandoc.Str(". "), pandoc.Str("(" .. book.year .. "). "),
      pandoc.Str(book.publisher or ""),
      pandoc.Str(book.address or "")
    }))
  end

  -- Combine sections into the document
  doc.blocks = pandoc.Blocks(article_blocks) .. pandoc.Blocks(book_blocks)

  return pandoc.utils.citeproc(doc)
end