/* =====================================================
   CASE STUDY MODAL
===================================================== */

async function openCaseStudy(file) {

    const modal = document.getElementById("caseModal");

    const content = document.getElementById("caseStudyContent");

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error("Case study could not be loaded.");
        }

        const html = await response.text();

        const parser = new DOMParser();

        const documentHTML =
            parser.parseFromString(html, "text/html");

        const caseContent =
            documentHTML.querySelector(".case-study-content");

        if (caseContent) {

            content.innerHTML =
                caseContent.outerHTML;

        } else {

            content.innerHTML =
                "<p>Case study content not found.</p>";

        }

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    catch (error) {

        content.innerHTML = `
            <div style="padding:40px;">
                <h2>Unable to load case study</h2>
                <p>Please try again.</p>
            </div>
        `;

        modal.classList.add("active");

        console.error(error);

    }

}


/* Close popup */

function closeCaseStudy() {

    const modal =
        document.getElementById("caseModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* Close when clicking outside popup */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("caseModal");

    if (event.target === modal) {

        closeCaseStudy();

    }

});


/* Close using ESC key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCaseStudy();

    }

});
