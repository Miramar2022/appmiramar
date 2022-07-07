const url1 = 'docs/Horario General.pdf';
const url2 = 'docs/Horario Act Niños y Adolescentes.pdf';
const url3 = 'docs/Listado de Objetos perdidos.pdf';
const url4 = 'docs/Preguntas Frecuentes - Miramar 2022.pdf'
const url5 = 'docs/pdf.pdf';
const url6 = 'docs/F1008B Examen conocimientos.pdf'

var url;

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1,
  canvas = document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d');

// Render the page
const renderPage = num => {
  pageIsRendering = true;

  // Get page
  pdfDoc.getPage(num).then(page => {
    // Set scale
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport
    };

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    // Output current page
    document.querySelector('#page-num').textContent = num;
  });
};

// Check for pages rendering
const queueRenderPage = num => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// Show Prev Page
const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

// Show Next Page
const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};

function mainshow(){
  var main = document.getElementById('mainpage');
  var doc1 = document.getElementById('render1');
  var avisos = document.getElementById('avisos');
  var pdfbuttons = document.getElementById('pdfbuttons');

  main.hidden = false;
  avisos.hidden = false;
  doc1.hidden = true;
  pdfbuttons.hidden = true;
}
function pdf1(){
  var main = document.getElementById('mainpage');
  var doc1 = document.getElementById('render1');
  var avisos = document.getElementById('avisos');
  var pdfbuttons = document.getElementById('pdfbuttons');
  var misc = document.getElementById('misc');
  misc.hidden = true;

  
  main.hidden = true;
  avisos.hidden = false;
  doc1.hidden = false;
  pdfbuttons.hidden = true;

  url = url1;
  
  // Get Document
  pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

  // Button Events
  document.querySelector('#prev-page').addEventListener('click', showPrevPage);
  document.querySelector('#next-page').addEventListener('click', showNextPage);
}

function pdf2(){
  var main = document.getElementById('mainpage');
  var doc1 = document.getElementById('render1');
  var avisos = document.getElementById('avisos');
  var pdfbuttons = document.getElementById('pdfbuttons');
  var misc = document.getElementById('misc');
  misc.hidden = true;

  
  main.hidden = true;
  avisos.hidden = false;
  doc1.hidden = false;
  pdfbuttons.hidden = true;

  url = url2;
  
  // Get Document
  pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

  // Button Events
  document.querySelector('#prev-page').addEventListener('click', showPrevPage);
  document.querySelector('#next-page').addEventListener('click', showNextPage);
}
function pdf3(){
  var main = document.getElementById('mainpage');
  var doc1 = document.getElementById('render1');
  var avisos = document.getElementById('avisos');
  var pdfbuttons = document.getElementById('pdfbuttons');
  var misc = document.getElementById('misc');
  misc.hidden = true;

  
  main.hidden = true;
  avisos.hidden = false;
  doc1.hidden = false;
  pdfbuttons.hidden = true;

  url = url3;
  
  // Get Document
  pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

  // Button Events
  document.querySelector('#prev-page').addEventListener('click', showPrevPage);
  document.querySelector('#next-page').addEventListener('click', showNextPage);
}
function pdf4(){
  var main = document.getElementById('mainpage');
  var doc1 = document.getElementById('render1');
  var avisos = document.getElementById('avisos');
  var pdfbuttons = document.getElementById('pdfbuttons');
  var misc = document.getElementById('misc');
  misc.hidden = true;

  
  main.hidden = true;
  avisos.hidden = false;
  doc1.hidden = false;
  pdfbuttons.hidden = false;

  url = url4;
  
  // Get Document
  pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;

    document.querySelector('#page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // Display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);
    // Remove top bar
    document.querySelector('.top-bar').style.display = 'none';
  });

  // Button Events
  document.querySelector('#prev-page').addEventListener('click', showPrevPage);
  document.querySelector('#next-page').addEventListener('click', showNextPage);
}
function miscshow(){
  var main = document.getElementById('mainpage');
  var doc1 = document.getElementById('render1');
  var avisos = document.getElementById('avisos');
  var misc = document.getElementById('misc');
  misc.hidden = false;
  
  main.hidden = true;
  avisos.hidden = false;
  doc1.hidden = true;
  

}
function pdfmisc(){
  var selection = document.getElementById("selector").value;
  var doc1 = document.getElementById('render1');

  switch(selection){
    case "def":
      doc1.hidden = true;
      break
    case "1":
      doc1.hidden = false;
      url = url5;
      // Get Document
      pdfjsLib
      .getDocument(url)
      .promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;

        document.querySelector('#page-count').textContent = pdfDoc.numPages;

        renderPage(pageNum);
      })
      .catch(err => {
        // Display error
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.message));
        document.querySelector('body').insertBefore(div, canvas);
        // Remove top bar
        document.querySelector('.top-bar').style.display = 'none';
      });

      // Button Events
      document.querySelector('#prev-page').addEventListener('click', showPrevPage);
      document.querySelector('#next-page').addEventListener('click', showNextPage);
      break
    case "2":
      doc1.hidden = false;
      url = url6
      // Get Document
      pdfjsLib
      .getDocument(url)
      .promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;

        document.querySelector('#page-count').textContent = pdfDoc.numPages;

        renderPage(pageNum);
      })
      .catch(err => {
        // Display error
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.message));
        document.querySelector('body').insertBefore(div, canvas);
        // Remove top bar
        document.querySelector('.top-bar').style.display = 'none';
      });

      // Button Events
      document.querySelector('#prev-page').addEventListener('click', showPrevPage);
      document.querySelector('#next-page').addEventListener('click', showNextPage);
      url = url6;
      break
  }

  
}