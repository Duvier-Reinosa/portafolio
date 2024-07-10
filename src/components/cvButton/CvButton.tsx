import './cvButton.css'

function CvButton() {
    const handleDownload = () => {
        // window.open('https://drive.google.com/file/d/1XzPZj1jU0p8z0nR4bZ2J1Bbq2l8Z7K8J/view?usp=sharing')
        // necesito descargar el cv.pdf de la carpeta public

        window.open('/cv.pdf')
    }

    return (
        <button className="cvButton" onClick={handleDownload}>
            Download CV
        </button>
    )
}

export default CvButton