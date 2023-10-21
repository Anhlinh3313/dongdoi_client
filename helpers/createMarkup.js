export default function createMarkup(db) {
  if (db) {
    return { __html: db };
  } else {
    return { __html: "loading..." };
  }
}
