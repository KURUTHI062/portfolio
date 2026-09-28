const fs = require('fs');
const path = require('path');

function escapePdf(str) {
  return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function buildResumePdf() {
  let stream = '';
  
  function addText(text, x, y, font = 'F1', size = 10, r = 0.1, g = 0.1, b = 0.1) {
    stream += `BT /${font} ${size} Tf ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg ${x} ${y} Td (${escapePdf(text)}) Tj ET\n`;
  }

  function addLine(x1, y1, x2, y2, r = 0.2, g = 0.2, b = 0.2, width = 1) {
    stream += `${width} w ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} RG ${x1} ${y1} m ${x2} ${y2} l S\n`;
  }

  function addRect(x, y, w, h, r = 0.88, g = 0.92, b = 0.96) {
    stream += `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg ${x} ${y} ${w} ${h} re f\n`;
  }

  function addCircle(cx, cy, radius, filled = true, r = 0.2, g = 0.2, b = 0.2) {
    // approximate circle in PDF
    const k = radius * 0.5522847498;
    stream += `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg ${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} RG\n`;
    stream += `${cx + radius} ${cy} m\n`;
    stream += `${cx + radius} ${cy + k} ${cx + k} ${cy + radius} ${cx} ${cy + radius} c\n`;
    stream += `${cx - k} ${cy + radius} ${cx - radius} ${cy + k} ${cx - radius} ${cy} c\n`;
    stream += `${cx - radius} ${cy - k} ${cx - k} ${cy - radius} ${cx} ${cy - radius} c\n`;
    stream += `${cx + k} ${cy - radius} ${cx + radius} ${cy - k} ${cx + radius} ${cy} c\n`;
    if (filled) {
      stream += `f\n`;
    } else {
      stream += `0.75 w S\n`;
    }
  }

  // Header background bar (Light blue-gray matching original attached resume)
  addRect(0, 725, 595.28, 116.89, 0.85, 0.90, 0.95);
  
  // Header Name (Centered)
  addText('Nee Kuruthi', 230, 802, 'F2', 24, 0.12, 0.18, 0.25);
  
  // Contact details line 1
  const line1 = 'kuruthi076@gmail.com   8015949693   chennai,India   02/10/2006   INDIAN';
  addText(line1, 100, 780, 'F1', 8.5, 0.2, 0.25, 0.3);
  
  // Contact details line 2
  const line2 = 'MALE   GitHub: github.com/KURUTHI062   Linkedin: linkedin.com/in/nee-kuruthi-0467b4357';
  addText(line2, 130, 762, 'F1', 8.5, 0.2, 0.25, 0.3);

  let curY = 705;

  function sectionHeader(title) {
    addText(title.toUpperCase(), 45, curY, 'F2', 11, 0.1, 0.15, 0.25);
    addLine(45, curY - 3, 550, curY - 3, 0.15, 0.2, 0.3, 1.2);
    curY -= 16;
  }

  // 1. CAREER OBJECTIVE
  sectionHeader('CAREER OBJECTIVE');
  addText('A dedicated and enthusiastic Computer Science student looking for an opportunity to start my', 45, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 12;
  addText('career in the IT industry where I can utilize my technical skills, contribute to organizational growth,', 45, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 12;
  addText('and continuously learn new technologies.', 45, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 20;

  // 2. EDUCATION
  sectionHeader('EDUCATION');
  addText('B.E in Computer Science and Engineering - II Year', 45, curY, 'F2', 9.5, 0.1, 0.1, 0.1);
  addText('2024 – Present', 475, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 12;
  addText('S.A. Engineering College', 45, curY, 'F1', 9, 0.3, 0.3, 0.3);
  addText('CHENNAI,INDIA', 465, curY, 'F1', 8.5, 0.2, 0.2, 0.2);
  curY -= 16;

  addText('HSC', 45, curY, 'F2', 9.5, 0.1, 0.1, 0.1);
  addText('2023 – 2024', 475, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 12;
  addText('Sir & Lady M. Venkatasubba Rao Matriculation Higher Secondary School', 45, curY, 'F1', 9, 0.3, 0.3, 0.3);
  addText('CHENNAI,INDIA', 465, curY, 'F1', 8.5, 0.2, 0.2, 0.2);
  curY -= 16;

  addText('SSLC', 45, curY, 'F2', 9.5, 0.1, 0.1, 0.1);
  addText('2021 – 2022', 475, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 12;
  addText('Seventh Day Adventist Matric School', 45, curY, 'F1', 9, 0.3, 0.3, 0.3);
  addText('CHENNAI,INDIA', 465, curY, 'F1', 8.5, 0.2, 0.2, 0.2);
  curY -= 20;

  // 3. SKILLS
  sectionHeader('SKILLS');
  addText('Technical Skills:', 45, curY, 'F2', 9, 0.15, 0.15, 0.15);
  curY -= 12;
  addText('• Python / Java / C', 50, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('• SQL', 50, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('• React.js/vite', 50, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 14;

  addText('Soft Skills', 45, curY, 'F2', 9, 0.15, 0.15, 0.15);
  curY -= 12;
  addText('• Communication', 50, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('• Team work', 50, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('• Problem Solving', 50, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 20;

  // 4. PROJECTS
  sectionHeader('PROJECTS');
  addText('personal projects', 45, curY, 'F2', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('Portfolio Website', 45, curY, 'F1', 9, 0.3, 0.3, 0.3);
  curY -= 11;
  addText('• Created a personal portfolio to showcase projects and skills using vite/react.js', 50, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 20;

  // 5. COURSES
  sectionHeader('COURSES');
  addText('App Building Onramp', 45, curY, 'F2', 9, 0.1, 0.1, 0.1);
  addText('11/2025', 495, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('MathWorks', 45, curY, 'F1', 9, 0.3, 0.3, 0.3);
  curY -= 15;

  addText('Python Essentials 1', 45, curY, 'F2', 9, 0.1, 0.1, 0.1);
  addText('07/2025', 495, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('Cisco Networking Academy', 45, curY, 'F1', 9, 0.3, 0.3, 0.3);
  curY -= 15;

  addText('Data Structures and Algorithm', 45, curY, 'F2', 9, 0.1, 0.1, 0.1);
  addText('11/2025', 495, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('Infosys Springboot', 45, curY, 'F1', 9, 0.3, 0.3, 0.3);
  curY -= 15;

  addText('Data Analytics', 45, curY, 'F2', 9, 0.1, 0.1, 0.1);
  addText('06/2026 – 07/2026', 445, curY, 'F1', 9, 0.2, 0.2, 0.2);
  curY -= 11;
  addText('NoviTech R&D Private Limited', 45, curY, 'F1', 9, 0.3, 0.3, 0.3);
  curY -= 20;

  // 6. LANGUAGES
  sectionHeader('LANGUAGES');
  addText('English', 45, curY, 'F1', 9, 0.2, 0.2, 0.2);
  // 4 filled dots, 1 hollow dot
  for (let i = 0; i < 4; i++) {
    addCircle(195 + i * 11, curY + 3, 3, true, 0.2, 0.2, 0.2);
  }
  addCircle(195 + 4 * 11, curY + 3, 3, false, 0.5, 0.5, 0.5);

  addText('Tamil', 280, curY, 'F1', 9, 0.2, 0.2, 0.2);
  // 5 filled dots
  for (let i = 0; i < 5; i++) {
    addCircle(420 + i * 11, curY + 3, 3, true, 0.2, 0.2, 0.2);
  }

  // Assemble PDF structure
  const streamBuf = Buffer.from(stream, 'latin1');
  const streamLen = streamBuf.length;

  const obj1 = '<< /Type /Catalog /Pages 2 0 R >>';
  const obj2 = '<< /Type /Pages /Kids [3 0 R] /Count 1 >>';
  const obj3 = '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>';
  const obj4 = `<< /Length ${streamLen} >>\nstream\n${stream}\nendstream`;
  const obj5 = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
  const obj6 = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';

  const body = [obj1, obj2, obj3, obj4, obj5, obj6];
  let pdf = '%PDF-1.4\n';
  const xref = [0];

  for (let i = 0; i < body.length; i++) {
    xref.push(pdf.length);
    pdf += `${i + 1} 0 obj\n${body[i]}\nendobj\n`;
  }

  const xrefStart = pdf.length;
  pdf += 'xref\n';
  pdf += `0 ${body.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i <= body.length; i++) {
    pdf += `${String(xref[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += 'trailer\n';
  pdf += `<< /Size ${body.length + 1} /Root 1 0 R >>\n`;
  pdf += 'startxref\n';
  pdf += `${xrefStart}\n`;
  pdf += '%%EOF\n';

  const outPath = path.join(__dirname, '..', 'public', 'resume.pdf');
  fs.writeFileSync(outPath, pdf, 'latin1');
  console.log('Successfully generated authentic resume matching attached PDF at ' + outPath);
}

buildResumePdf();
