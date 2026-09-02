export default function Ayuda() {
  return (
    <div>
      <header className="page-header">
        <span className="accent-bar"></span>
        <div>
          <h1 className="page-title">Ayuda</h1>
          <p className="page-sub">
            Guía rápida de cómo se traduce y cómo se revisa en la Coppermind.
          </p>
        </div>
      </header>

      <div className="proyecto-card glass-panel">
        <article className="proyecto-body">
          <p>
            Toda la traducción y la revisión se hace directamente sobre la
            propia wiki de la Coppermind. Mentecobre no sustituye ese trabajo:
            su papel es <strong>organizarlo</strong>. Desde aquí eliges tu
            artículo, lo marcas y, cuando terminas, avanzas al siguiente paso.
          </p>

          <h2 className="ayuda-h2">Cómo se traduce</h2>
          <p>
            Cada traductor se apunta a uno o varios universos. Con eso,
            Mentecobre le muestra los artículos que le tocan: primero el que
            tiene asignado hoy y, debajo, la cola de los siguientes que puede
            tomar según sus universos.
          </p>
          <p>
            Para traducir un artículo, se edita la página equivalente en la
            wiki inglesa y se traduce al castellano, siguiendo la
            <em> terminología y el estilo</em> ya establecidos en el resto de
            la Coppermind. Cuando está listo, se marca como completado y pasa
            a la fase de revisión.
          </p>

          <h2 className="ayuda-h2">Cómo se revisa</h2>
          <p>
            Una vez traducido, los revisores dan una segunda pasada al
            artículo. Revisan el formato y el contenido: que la información sea
            correcta, que la redacción fluya y que la terminología se mantenga
            coherente con el resto del proyecto y fiel a la obra de Brandon
            Sanderson.
          </p>

          <p className="proyecto-destacado">
            La clave es siempre la coherencia: un término, una única forma de
            traducirlo en todo el Cosmere.
          </p>
        </article>
      </div>
    </div>
  )
}