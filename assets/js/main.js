const getStarCountForRepo = async (repoName, idToInsertStarCount) => {
    const isLocalHost = location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "";
    let starCount = "0000";

    // Prevent GitHub API rate-limiting when developing locally
    if (!isLocalHost) {
        try {
            const resp = await fetch(`https://api.github.com/repos/${repoName}`);
            if (!resp.ok) throw resp.statusText;
            const repoData = await resp.json();
            starCount = repoData.stargazers_count;
        } catch (error) {
            return console.error(`Unable to retrieve star count for ${repoName}: ${error}`);
        }
    }

    const starCountContainer = document.getElementById(idToInsertStarCount);
    starCountContainer.textContent = starCount;
    starCountContainer.parentNode.classList.remove("invisible");
};

getStarCountForRepo("arrow-py/arrow", "arrow-star-count");
getStarCountForRepo("jadchaar/sec-edgar-downloader", "sec-edgar-downloader-star-count");
getStarCountForRepo("jadchaar/sec-edgar-api", "sec-edgar-api-star-count");
getStarCountForRepo("jadchaar/sec-cik-mapper", "sec-cik-mapper-star-count");

// const adjustForDarkMode = () => {
//     const themingButton = document.getElementById("theming-button");

//     const createFontAwesomeDomElt = (icon, color) => {
//         const idiomaticElt = document.createElement("i");
//         idiomaticElt.className = `fas ${icon}`;
//         idiomaticElt.style.color = color;
//         return idiomaticElt;
//     };

//     const changeToLightMode = () => {
//         themingButton.replaceChildren();
//         themingButton.appendChild(
//             createFontAwesomeDomElt("fa-moon", "#606ae8")
//         );
//     };

//     const changeToDarkMode = () => {
//         themingButton.replaceChildren();
//         themingButton.appendChild(
//             createFontAwesomeDomElt("fa-sun", "#fae150")
//         );
//     };

//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         changeToDarkMode();
//     } else {
//         changeToLightMode();
//     }

//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//         const newColorScheme = e.matches ? "dark" : "light";
//         if (newColorScheme === "dark") {
//             changeToDarkMode()
//         } else {
//             changeToLightMode();
//         }
//     });
// };

// adjustForDarkMode();
