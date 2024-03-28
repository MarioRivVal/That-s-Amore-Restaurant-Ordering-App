export function getTime() {
  return new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date());
}

export function getDate() {
  return new Intl.DateTimeFormat(navigator.language, {
    day: "numeric",
    month: "numeric",
    year: "2-digit",
  }).format(new Date());
}

export function printBill() {
  const sectionToPrint = document.getElementById("print-section");
  const printWindow = window.open();

  if (sectionToPrint && printWindow) {
    const headerContent =
      '<html><head><title>Print Bill</title><link rel="stylesheet" href="src/index.css"></head><body>';

    sectionToPrint.style.width = "284px";
    sectionToPrint.style.height = "fit-content";
    sectionToPrint.style.margin = "10px";

    printWindow.document.write(headerContent);
    printWindow.document.write(`${sectionToPrint.outerHTML}`);

    printWindow.document.close();

    printWindow.onafterprint = function () {
      printWindow.close();
    };
    printWindow.print();
  }
}
