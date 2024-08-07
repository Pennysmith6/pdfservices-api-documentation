---
title: PDF Accessibility Auto-Tag API | Adobe PDF Services
---
# Overview
<p>

**What is PDF Tag structure?**

To read a document’s text and present it in a way that makes sense to users using assistive technology, a screen reader 
or other text-to-speech tool requires that the document be structured. Document structure tags in a PDF define the 
reading order and identify headings, paragraphs, sections, tables and other page elements. The tags structure also 
allows for documents to be resized and reflowed for viewing at larger sizes and on mobile devices.

You can learn more about PDF Accessibility in [this overview](https://www.adobe.com/accessibility/pdf/pdf-accessibility-overview.html).


**What is Adobe PDF Accessibility Auto-Tag API?**

PDF Accessibility Auto-Tag API is a powerful tool that may be used as part of the process of improving accessibility in 
individual PDFs and can be applied at scale for large backlogs of PDFs. Part of the Adobe PDF Services API offering, it 
is available as a REST-powered SDK with underlying Sensei AI and is easily called by automated workflows.

Automatic tagging is a good first step on a document’s journey to full accessibility. It outputs the tagged pdf, along 
with an optional report providing detailed information about the added tags. The service replaces any existing tags 
within your document, so it provides the most benefit for PDFs that have no tags or low-quality tags. After 
auto-tagging, to further improve accessibility, you may add alt-text to all figures and review the tagging of complex 
tables. Next you should check the first page and how the title is identified, the reading order, and then run the 
accessibility report, resolving any errors.

Automatic tagging provides significant quality improvements over untagged PDF files including more accurate results for 
heading levels, reading order, complex lists, links, references, and tables. Screen reader users also benefit 
significantly from the improvements to heading levels for navigation.

The Excel report generated by the PDF Accessibility Auto-Tag service provides information related to the tagging of the 
document and helps you find content that you might need to review or correct.

The service has the following options:

- **GenerateReport** - Create a report about the document and its tags (in XLSX format).
- **ShiftHeadings** - The default tagging identifies a title (if present) and includes it as an additional heading level 1 (H1). If you wish to be more consistent with WCAG HTML accessibility, if a title is identified, then it is marked as an H1, and all remaining headings in the document can be shifted down one level (e.g., H1->H2). This defaults to false (no shift).

The PDF produced by PDF Accessibility Auto-Tag API has its structure identified (Headings, Tables, Lists, Paragraphs, 
etc), along with language identification for each paragraph for content and to improve word breaks. The output is a 
tagged PDF, however it is not guaranteed to comply with accessibility standards such as 
[WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) and [PDF/UA](https://www.pdfa.org/resource/iso-14289-pdfua/), 
as you may need to perform further downstream remediation to meet those standards.

</p>
