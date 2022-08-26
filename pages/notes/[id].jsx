import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Note {id}</h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  );
};

export default Page;
