// @flow
import * as React from 'react';
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-12 px-4 md:px-8 lg:px-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-6">
                            <Image src={"/images/logo.png"} alt="logo of bibxchange" width={64} height={64} />
                            <span className="ml-2 font-bold text-xl">Bib Xchange</span>
                        </div>
                        <p className="text-white">
                            {"La première marketplace sécurisée pour l'achat et la vente de dossards sportifs."}
                        </p>
                    </div>
                    <div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg
                                    className="h-5 w-5 text-blue-400 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <a
                                    href="mailto:no-reply@bibxchange.net"
                                    className="text-white transition-colors"
                                ><span
                                    className="__cf_email__"
                                    data-cfemail="b1d2dedfc5d0d2c5f1d5dec2c2d0c3d5c2c6d0c19fd2dedc"
                                >Nous contacter</span></a>
                            </li>
                        </ul>
                        <div className="mt-6 flex space-x-4">
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">
                                <svg className="h-6 w-6" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>X</title>
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">
                                <svg className="h-6 w-6" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <title>Facebook</title>
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-white text-sm">
                    <p>&copy; 2025 Bib Xchange. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer