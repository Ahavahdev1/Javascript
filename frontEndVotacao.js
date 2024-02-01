"use client"

import Head from "next/head";

export default function Home() {

  function btnLoginClick() {
    console.log("click");
  }

  return (
    <>
      <Head>
        <title>StudioWeb | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://imgs.search.brave.com/aCKyuVdhLK3kZfWMcw5VWVx0sMbrZ5uRotm0Refnk6w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucG9kZXIzNjAu/Y29tLmJyLzIwMjIv/MDgvVFNFLUNvZGln/b0ZvbnRlLU1pbGl0/YXJlcy0wM2FnbzIw/MjItMTItc2NhbGVk/LTEtODQ4eDQ3Ny5q/cGVn"
              className="d-block mx-lg-auto img-fluid"
              width="700"
              height="500"
              alt="Imagem"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">StudioWeb Eleições 2026</h1>
            <p className="lead">Votação on-chain para Presidente do Brasil</p>
            <p className="lead mb-3">Autentique-se com sua carteira e deixe seu voto.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                onClick={btnLoginClick}
                className="btn btn-primary btn-lg px-4 me-md-2">
                  <img src="/metamask.svg" width="64" className="me-3" />
                  Conectar com a Metamask
              </button>
            </div>
          </div>
        </div>
        {/* abertura do elemento footer */}
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md4 mb-0 text-body-secundary">&copy; 2026 desenvolvimento a caráter de estudo</p>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secundary">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
        {/* Fechamento o elemento footer */}
        </footer>
      </div>
    </>
  );
}
