import React from "react";
const ProductDescription=()=>{
    return(
        <div className="mt-20">
            <div className="flex gap-3 mb-4">
                <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">Description</button>
                <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Care Guide</button>
                <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">Size Guide</button>
            </div>
            <div className="flex flex-col pb-16">
                
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tristique elit. Aliquam dapibus eget libero sed ullamcorper. Donec vehicula, velit sit amet rhoncus scelerisque, leo ipsum aliquam eros, et rhoncus lacus dolor vitae sem. Nullam vel interdum nisl, auctor malesuada felis. Ut malesuada massa eget nisl iaculis convallis. Etiam id convallis justo. Donec id semper leo, sed consectetur diam. Praesent sodales magna quis lorem dapibus, quis tempor arcu mattis. Sed pellentesque aliquet tellus, imperdiet accumsan magna. Aenean finibus velit erat, vel consequat felis ullamcorper alique.</p>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tristique elit. Aliquam dapibus eget libero sed ullamcorper. Donec vehicula, velit sit amet rhoncus scelerisque, leo ipsum aliquam eros, et rhoncus lacus dolor vitae sem. Nullam vel interdum nisl, auctor malesuada felis. Ut malesuada massa eget nisl iaculis convallis. </p>
            </div>


        </div>

    )
}
export default ProductDescription;