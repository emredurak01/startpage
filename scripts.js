/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"maps":"https://maps.google.com/","g":"https://www.google.com/","y":"https://www.youtube.com/","t":"https://translate.google.com/","wp":"https://web.whatsapp.com/","bb":"https://ieu.blackboard.com/","oasis":"https://oasis.izmirekonomi.edu.tr/index","git":"https://github.com/","sy":"https://www.symbolab.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"bXdaysDakOVzm2gx","label":"Main","bookmarks":[{"id":"bD82nYPKQqKiYQTn","label":"Google","url":"https://www.google.com/"},{"id":"LEzNR1EOjFR4jr6O","label":"Youtube","url":"https://www.youtube.com/"},{"id":"lO20HrUeeVDLkMgI","label":"Translate","url":"https://translate.google.com/"},{"id":"rF5LRWZ0ETa3iJ2O","label":"Whatsapp","url":"https://web.whatsapp.com/"}]},{"id":"l6qh2R5BLbUys06N","label":"School","bookmarks":[{"id":"t9ZwBxdLIXPRmOgC","label":"Blackboard","url":"https://ieu.blackboard.com/"},{"id":"1u7Vwwcp2eIHD7wM","label":"Oasis","url":"https://oasis.izmirekonomi.edu.tr/index"}]},{"id":"aMZfsQ04HGtSCTJn","label":"Coding","bookmarks":[{"id":"eOB0YaFHYGv4fdq9","label":"Github","url":"https://github.com/"}]},{"id":"vhuh8Mbz8yE9kGiC","label":"Mail","bookmarks":[{"id":"elzm9yot2W92wSZC","label":"Outlook","url":"https://outlook.live.com/mail/0/"},{"id":"msGFemMsoWBTXovF","label":"Gmail","url":"https://mail.google.com/mail/u/0/#inbox"},{"id":"63PIfPc3RespoP7D","label":"Webmail","url":"https://zcstd.izmirekonomi.edu.tr/#1"}]},{"id":"BiE3kf1Hr58N9f9Y","label":"Other","bookmarks":[{"id":"7r9izUhVBkNu6DB5","label":"Symbolab","url":"https://www.symbolab.com/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
