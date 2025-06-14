const imageArr = [
    /* Background images data */
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
        "img": "img/floatingislandswallpapers.jpg",
        "source": "Granblue Fantasy"
    },
    {
        "img": "img/shieldherobackground.jpg",
        "source": "X: @Jimboboxart"
    },
    {
        "img": "img/landscapebackground.jpg",
        "source": "Pixiv: <a href='https://www.pixiv.net/en/users/6163754' target='_blank'>そよ風</a>"
    },
    {
        "img": "img/landscapebackground2.jpg",
        "source": "Alpha Coders: <a href='https://alphacoders.com/users/profile/227699/patrika' target='_blank'>patrika</a>"
    },
    {
        "img": "img/mavuikabackground.jpg",
        "source": "Hoyoverse"
    },
    {
        "img": "img/weatheringwithyoubackground.jpg",
        "source": "Weathering with you"
    },
    {
        "img": "img/kianavitabackground.jpg",
        "source": "Hoyoverse"
    }
];
//console.log("Check imageArr[] length: " + imageArr.length);

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

/*
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
*/

// HTML of the Toast
let imageSourceToastHTML = `
    <div class="toast-container position-fixed top-50 start-50 translate-middle p-3" data-bs-theme="dark">
        <div id="imageSourceLiveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
            <div class="toast-header">
                <i class="bi bi-info-circle"></i>&nbsp;
                <strong class="me-auto">Background Image Source</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                <span id="BackgroundImageSourceText"></span>
            </div>
        </div>
    </div>
`;

document.getElementById("imageSourceToast").innerHTML = imageSourceToastHTML;

// Bootstrap code for the toast. Need to put it at the end of the HTML to work.
const toastTrigger = document.getElementById('imageSourceLiveToastBtn')
const toastLiveExample = document.getElementById('imageSourceLiveToast')

if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
        toastBootstrap.show()
    })
}
