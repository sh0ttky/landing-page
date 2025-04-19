"use client";

import { CookieIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

export default function CookieMessage({ variant = "default", demo = false, onAcceptCallback = () => { }, onDeclineCallback = () => { } }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hide, setHide] = useState(false);

    const accept = () => {
        setIsOpen(false);
        document.cookie = "CookieMessage=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        setTimeout(() => {
            setHide(true);
        }, 700);
        onAcceptCallback();
    };

    const decline = () => {
        setIsOpen(false);
        setTimeout(() => {
            setHide(true);
        }, 700);
        onDeclineCallback();
    };

    useEffect(() => {
        try {
            setIsOpen(true);
            if (document.cookie.includes("CookieMessage=true")) {
                if (!demo) {
                    setIsOpen(false);
                    setTimeout(() => {
                        setHide(true);
                    }, 700);
                }
            }
        }
        catch (e) {
            // console.log("Error: ", e);
        }
    }, []);

    return (

        <div className={cn("fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>
            <div className="dark:bg-card bg-background m-3 border border-border shadow-lg">
                <div className="grid gap-2">
                    <div className="border-b border-border h-14 flex items-center justify-between p-4">
                        <h1 className="text-lg font-medium">Nous utilisons des cookies</h1>
                        <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm font-normal text-start">
                            Nous utilisons des cookies pour garantir que vous bénéficiez de la meilleure expérience sur notre site web. Pour plus d'informations sur l'utilisation des cookies, veuillez consulter notre politique en matière de cookies.
                            <br />
                            <br />
                            <span className="text-xs">En cliquant sur "<span className="font-medium opacity-80">Accepter</span>", vous acceptez notre utilisation de vos cookies.</span>
                            <br />
                            <a href="/terms" className="text-xs underline">En savoir plus.</a>
                        </p>
                    </div>
                    <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
                        <button onClick={accept} className="  bg-blue-800 text-white m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"
                        >Accepter</button>
                        <button onClick={decline} className="  bg-gray-200 text-black m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"
                        >Refuser</button>

                    </div>
                </div>
            </div>
        </div>

    )

}