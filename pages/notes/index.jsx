import Link from "next/link";

const Page = () => {
  const notes = new Array(5)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div>
      <div>Notes</div>

      {notes.map((note) => {
        <div>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>;
      })}
    </div>
  );
};

export default Page;
