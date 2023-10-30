const BgImage = ({ imageUrl, firstName, lastName }) => {
    if (imageUrl && imageUrl.trim() !== "") {
        return (
            <div className="flex items-center">
                <img className="w-8 h-8 mr-1 rounded-lg" src={imageUrl} alt={`Imagen de ${firstName} ${lastName}`} />
            </div>
        );
    }
    return "";
};

export default BgImage;