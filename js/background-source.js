const imageArr = [
    {
        "img": "img/velionabackground3.png",
        "source": "Hoyoverse"
    }, 
    {
        "img": "img/arlecbackground.jpg",
        "source": "X: @Dichlorvos121"
    },
    {
        "img": "img/wuwazani7.jpg",
        "source": "Kuro Games"
    },
    {
        "img": "img/minimalistmoonwallpaper.jpg",
        "source": "wallpaperflare.com"
    },
    {
        "img": "img/floatingislandswallpapers.jpg",
        "source": "Granblue Fantasy"
    },
    {
        "img": "img/heliabackground.jpg",
        "source": "Hoyoverse"
    },
    {
        "img": "img/shieldherobackground.jpg",
        "source": "X: @Jimboboxart"
    }
];

let index, imageSourceInfo, imageURL;

index = Math.floor(Math.random() * imageArr.length);
imageSourceInfo = imageArr[index].source;
imageURL = imageArr[index].img;

console.log("["+index+"] Background Image Source = " + imageSourceInfo);
//console.log("["+index+"] Background Image Link   = " + imageURL);

// Select the first element with the class 'main-background-img'
const element = document.querySelector(".main-background-img");
// Set the image URL as background image. If the URL is invalid, load that other background image.
element.style.backgroundImage = "url('" + imageURL + "'), " + "url('img/background.png')";
//console.log("element.style.backgroundImage = " + element.style.backgroundImage);

// When clicking on the button to trigger the Modal, it will execute that function
function getImageSourceInfo() {
    document.getElementById("BackgroundImageSourceText").innerHTML = imageSourceInfo;
}

// HTML of the Modal popup
let imageSourceModalHTML = `
    <div class="modal fade" id="BackgroundImageSourceModal" tabindex="-1" aria-labelledby="BackgroundImageSourceModalLabel" aria-hidden="true" data-bs-theme="dark">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="BackgroundImageSourceModalLabel">Background Image Source</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <span id="BackgroundImageSourceText"></span>
                </div>
                <!--div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div-->
            </div>
        </div>
    </div>
`;

document.getElementById("imageSourceModal").innerHTML = imageSourceModalHTML;
