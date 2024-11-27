import Page from "@/components/template/Page";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col">
        <div className="">
          Inicio
        </div>
        <Link href="/events" className="btn blue w-24" >Eventos</Link>
      </div>
    </Page>
  );
}
