import Page from "@/components/template/Page";
import Link from "next/link";
import { events } from "core";
import Image from "next/image";
//import QRCode from "react-qr-code";

export default function Home() {
    return (
        <Page>
            <div className="flex flex-col">
                <div className="grid grid-cols-3 gap-5">
                    {events.map((evento) => (
                        <div
                            key={evento.id}
                            className="
                              flex flex-col w-full overflow-hidden
                              bg-zinc-800 rounded-lg
                            "
                        >
                            <div className="relative w-full h-52">
                                <Image
                                    src={evento.image}
                                    fill
                                    alt={evento.name}
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 flex flex-col items-center p-7 gap-5 text-center">
                                <span className="text-lg font-black">
                                    {evento.name}
                                </span>
                                <p className="flex-1 text-sm text-zinc-400">
                                    {evento.description}
                                </p>
                                {/* <QRCode
                                    value={JSON.stringify({
                                        id: evento.id,
                                        password: evento.password
                                    })}
                                    className="w-44 h-44"
                                /> */}
                                <div className="flex gap-5">
                                    <Link
                                        href={`/evento/admin/${evento.id}/${evento.password}`}
                                        className="flex-1 botao vermelho"
                                    >
                                        Admin
                                    </Link>
                                    <Link
                                        href={`/convite/${evento.identifier}`}
                                        className="flex-1 botao verde"
                                    >
                                        Convite
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/events" className="btn blue w-24">
                    Eventos
                </Link>
            </div>
        </Page>
    );
}
