export default function Carousel({slides}) {
    return (
       <div className="overflow relative">
        <div className="flex">

        {slides.map((s)=> {
            return <img src={s} />;
        })}

       </div> 
    </div>

    );
} 