import { useState } from 'react';
import './Images.css'
const Images = () => {
    const [selectedImage, setSelectedImage] = useState(null);


    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file)
        setSelectedImage(file);

    };
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Load the image onto the canvas
    const image = new Image();
    image.src = 'image.png';
    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;

        ctx.drawImage(image, 0, 0, image.width, image.height);

        // Remove background pixels using an image processing library or algorithm
        // Replace this with your background removal code

        // Convert the modified canvas image to a data URL
        const dataURL = canvas.toDataURL('image/png');

        // Create a new image element and set its src attribute to the data URL
        const newImage = new Image();
        newImage.src = dataURL;

        // Replace the original image element with the new image element
        const originalImage = document.getElementById('image');
        originalImage.parentNode.removeChild(originalImage);
        document.getElementById('image-container').appendChild(newImage);
    };
    return (
        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && (
                <div>
                    <div id="image-container">
                        <div id="image"></div>
                        <div id="overlay"></div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Images;