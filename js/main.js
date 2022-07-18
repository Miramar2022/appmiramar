const url1 = 'docs/Horario Conferencia (Jovenes).pdf';
const url2 = 'docs/carta_horarioninos_contigo2022.pdf';
const url3 = 'docs/Lost and Found - Miramar 22.pdf';
const url4 = 'docs/DISTRIBUCIÓN DE COMEDOR.pdf'
const url5 = 'docs/Horario Familias.pdf';
const url6 = 'docs/'
const url7 = 'docs/carta_mapa_contigo2022.pdf'

var main = document.getElementById('mainpage');
var doc1 = document.getElementById('render1');
var pdfbuttons = document.getElementById('pdfbuttons');
var misc = document.getElementById('misc');
var resvar = document.getElementById("resvar");

//const isMobile = navigator.userAgentData.mobile; //resolves true/false

var url;

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

var scale = 0.6,
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
  main.hidden = false;
  doc1.hidden = true;
  pdfbuttons.hidden = true;
  misc.hidden = true;
  resvar.hidden = true;
}

function pdf(num){
  main.hidden = true;
  doc1.hidden = false;
  pdfbuttons.hidden = false;
  switch(num){
    case 1:
      url = url1;
      break
    case 2:
      url = url2;
      break
    case 3:
      url = url3;
      break
    case 4:
      url = url4;
      break
    case 5:
      url = url5;
      break
    case 6:
      url = url6;
      break
    case 7:
      url = url7;
      break
  }
  
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
  misc.hidden = false;
  resvar.hidden = true;
  
  main.hidden = true;
  doc1.hidden = true;
  

}
function pdfmisc(){
  var selection = document.getElementById("selector").value;
  var doc1 = document.getElementById('render1');
  var surv = document.getElementById('surv');
  var d1 = document.getElementById('d1');
  var d2 = document.getElementById('d2');
  var d3 = document.getElementById('d3');
  var d4 = document.getElementById('day4');

  switch(selection){
    case "def":
      surv.hidden;
      d1.hidden;
      d2.hidden;
      d3.hidden;
      d4.hidden;
      break
    case "1":
      surv.hidden = false;
      d1.hidden = true;
      d2.hidden = true;
      d3.hidden = true;
      d4.hidden = true;
      break
    case "2":
      surv.hidden = true;
      d1.hidden = false;
      d2.hidden = true;
      d3.hidden = true;
      d4.hidden = true;
      break
    case "3":
      surv.hidden = true;
      d1.hidden = true;
      d2.hidden = false;
      d3.hidden = true;
      d4.hidden = true;
      break
    case "4":
      surv.hidden = true;
      d1.hidden = true;
      d1.hidden = true;
      d2.hidden = true;
      d3.hidden = false;
      d4.hidden = true;
      break
    case 5:
      surv.hidden = true;
      d1.hidden = true;
      d2.hidden = true;
      d3.hidden = true;
      d4.hiden = false;
      break
  }

  
}
function res(){
  var selec = document.getElementById("selector2").value;
  switch(selec){
    case "1":
      doc1.hidden = false;
      /*
      url = url7;
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
      */
      pdf(7)
      break
    case "2":
      pdf(4);
      break
  }
}
function pdfmob(){
  var selection = document.getElementById("selector1").value;
  switch(selection){
    case "def":
      break
    case "1":
      misc.hidden = true;
      resvar.hidden = true;
      main.hidden = true;
      doc1.hidden = false;
      pdf(1)
      break
    case "2":
      misc.hidden = true;
      resvar.hidden = true;
      main.hidden = true;
      doc1.hidden = false;
      pdf(2)
      break
    case "3":
      misc.hidden = true;
      resvar.hidden = true;
      main.hidden = true;
      doc1.hidden = false;
      pdf(3)
      break
    /*case "4":
      misc.hidden = true;
      resvar.hidden = true;
      main.hidden = true;
      doc1.hidden = false;
      pdf(4)
      break*/
    case "5":
      miscshow()
      break
    case "6":
      misc.hidden = true;
      resvar.hidden = false;
      main.hidden = true;
      doc1.hidden = true;
      break
    case "7":
      misc.hidden = true;
      resvar.hidden = true;
      main.hidden = true;
      doc1.hidden = false;
      pdf(5)
  }

  
}