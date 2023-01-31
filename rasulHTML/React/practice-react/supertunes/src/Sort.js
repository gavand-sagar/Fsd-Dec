export default function Sort({ type }) {
  if (type == "title") {
    return <button onClick="sortTitle">Sort By Title</button>;
  } else {
    return <button onClick="sortRating">Sort By Rating</button>;
  }
}
