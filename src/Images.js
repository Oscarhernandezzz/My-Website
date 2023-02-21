import React, { Component } from "react";
class Images extends Component {
    constructor(props){
        super(props)
        this.state={
            imageUrl: "",
            imageUrlArray: [
            "https://i.pinimg.com/originals/2b/ef/ba/2befbad569f6f8ad31fe03a77cf45ab6.gif",
            "https://i.pinimg.com/originals/fc/5d/cd/fc5dcd6551c0bc325dd678d7f2977f8d.gif",
            "https://i.pinimg.com/originals/c4/4f/37/c44f378245d5457a17782642ae320135.gif",
            "https://i.pinimg.com/originals/b8/d9/2c/b8d92ce8771786a9fff29f298d228a5e.gif",
            "https://i.pinimg.com/originals/dd/01/d7/dd01d7f4b5a021849ab0a3e1a7f54c49.gif",
            "https://i.pinimg.com/originals/33/75/a9/3375a97d4df29cf74794b71e3439a1fc.gif",
            "https://i.pinimg.com/originals/d9/c9/31/d9c93145f420d2b50640cb561f35daf5.gif",
            "https://i.pinimg.com/originals/f9/69/17/f96917eca63c436bcd85f7798a38aaac.gif",
            "https://i.pinimg.com/originals/e8/76/7f/e8767f1d1b53adfea0878d1fe868808e.gif",
            "https://i.pinimg.com/originals/ef/47/2a/ef472a120a9b808d570a563a7f232c1f.gif",
            "https://i.pinimg.com/originals/f1/f6/4d/f1f64d227e8cfbc751102105f9927e72.gif",
            "https://i.pinimg.com/originals/2c/af/a1/2cafa1a3fc1e248ef49136e396bc8e63.gif",
            "https://i.pinimg.com/originals/35/ad/73/35ad7310a503c4d6f4230669275bbdbe.gif",
            "https://i.pinimg.com/originals/3b/b2/d2/3bb2d258a3c908600a52069b9fbe783c.gif",
            "https://i.pinimg.com/originals/01/b9/5e/01b95ef28d7b5894326a990377cd507b.gif",
            "https://i.pinimg.com/originals/25/d3/01/25d301d362bf203f65eba9816886c7de.gif",
            "https://i.pinimg.com/originals/c5/1f/83/c51f8385341906f47643cb051c60bb3e.gif",
            "https://i.pinimg.com/originals/28/89/f2/2889f2aec66e3a7c7b7ff2ab78675b77.gif",
            "https://i.pinimg.com/originals/bd/08/95/bd089545030c10241fc3071614523e4c.gif",
            "https://i.pinimg.com/originals/b1/f5/2b/b1f52bcfd6d6c13986c56b07275643d4.gif",
            "https://i.pinimg.com/originals/d5/69/87/d56987ed09d04ff385dae34dc0f5d3b1.gif",
            "https://i.pinimg.com/originals/ad/fa/07/adfa071cbb701eda0a8ea9887eb938d0.gif",
            "https://i.pinimg.com/originals/0f/fb/1d/0ffb1d0d6ab80af9c26c656548c91461.gif",
            "https://i.pinimg.com/originals/ac/4f/9a/ac4f9ab2ff948b6f100fc0cfbe536066.gif",
            "https://i.pinimg.com/originals/7f/a9/e9/7fa9e99acea9222d2075328aa590a40c.gif",
            "https://i.pinimg.com/originals/55/9d/ce/559dce2856548ee6a8bae10f854ab8ed.gif",
            "https://i.pinimg.com/originals/66/f5/d0/66f5d051cea39232abd31177e75a81e1.gif",
            "https://i.pinimg.com/originals/7a/da/a5/7adaa5db48769240346ebe6c0b3099ce.gif",
            "https://i.pinimg.com/originals/d9/cc/c9/d9ccc911504c370177f0da0c3289b184.gif",
            "https://i.pinimg.com/originals/bc/ad/15/bcad15fbec045ac34a5a581dd17136ea.gif",
            "https://i.pinimg.com/originals/59/0f/48/590f48f868175b1d9330c71a518774da.gif",
            "https://menspower.nl/wp-content/uploads/2018/02/barbell-lunge.gif",
            "https://menspower.nl/wp-content/uploads/2018/02/Barbell-step-up.gif",
            "https://menspower.nl/wp-content/uploads/2018/02/dumbbell-standing-calf-raise.gif",
            "https://menspower.nl/wp-content/uploads/2018/04/leg-extension.gif",
            "https://menspower.nl/wp-content/uploads/2018/05/lying-leg-curl.gif",
            "https://menspower.nl/wp-content/uploads/2018/02/Barbell-squat.gif",
            "https://menspower.nl/wp-content/uploads/2018/02/Barbell-bench-press.gif",
            "https://menspower.nl/wp-content/uploads/2018/02/plank.gif",
            "https://i.pinimg.com/originals/4a/02/24/4a02247b6a5db025b43cbe82cade87fc.gif",
            "https://i.pinimg.com/originals/25/5c/03/255c036175af432487c29a71f4169d97.gif",
            "https://i.pinimg.com/originals/16/e0/db/16e0dba65bd9ee41d99cadd6edb19c1e.gif",
            "https://i.pinimg.com/originals/2a/5a/77/2a5a77c5de533fd8f0bd2d8143f3a747.gif",
            "https://i.pinimg.com/originals/1a/5c/26/1a5c2672a466ec9661ec54e80960ecc3.gif",
            "https://i.pinimg.com/originals/cb/88/47/cb8847e2fb04c1ed0f1ad0e275c39c9b.gif",
            "https://i.pinimg.com/originals/a0/62/45/a06245ae35f261838e8aa7eb133c080d.gif",
            "https://i.pinimg.com/originals/fd/19/2b/fd192bb6ef1ff52e0babb696c59500f1.gif",
            "https://i.pinimg.com/originals/93/55/3c/93553cb9a6c8d38999a3dfaa0e713df4.gif",
            "https://i.pinimg.com/originals/da/e7/e0/dae7e08ce36e71b720fd4ebed2ee79fe.gif",
            "https://i.pinimg.com/originals/ca/26/38/ca2638b2a7506e2072d4fb55f212188d.gif",
            "https://i.pinimg.com/originals/e1/73/07/e173078603de42bf3e6c0ebc3c5b5b21.gif",
            "https://i.pinimg.com/originals/2c/af/a1/2cafa1a3fc1e248ef49136e396bc8e63.gif",
            "https://i.pinimg.com/originals/6f/5e/c0/6f5ec009d436b6e601460daf9f430202.gif",
            "https://i.pinimg.com/originals/ee/3d/20/ee3d207ab8058632b2eff084a15340a2.gif",
            "https://i.pinimg.com/originals/55/9d/ce/559dce2856548ee6a8bae10f854ab8ed.gif",
            "https://i.pinimg.com/originals/ee/3d/20/ee3d207ab8058632b2eff084a15340a2.gif",
            "https://i.pinimg.com/originals/ad/fa/07/adfa071cbb701eda0a8ea9887eb938d0.gif",
            "https://i.pinimg.com/originals/e8/76/7f/e8767f1d1b53adfea0878d1fe868808e.gif",
            "https://i.pinimg.com/originals/c0/81/c6/c081c6ed405dec775757ebe13a725e4b.gif",
            "https://i.pinimg.com/originals/e7/45/d6/e745d6fcd41963a8a6d36c4b66c009a9.gif",
            "https://i.pinimg.com/originals/be/a5/5a/bea55ae094c246bbadf4c640d48e14fe.gif",
            "https://i.pinimg.com/originals/d9/c9/31/d9c93145f420d2b50640cb561f35daf5.gif",
            "https://i.pinimg.com/originals/66/f5/d0/66f5d051cea39232abd31177e75a81e1.gif",
            "https://i.pinimg.com/originals/d9/17/b8/d917b8a9648978c0ab377c1a1faea735.gif",
            "https://i.pinimg.com/originals/f0/78/d5/f078d53e475554659cc1ca4c2f44e53a.gif",
            "https://i.pinimg.com/originals/e7/3c/a3/e73ca3f21003ddc2f12a6da321dceac6.gif",
            "https://i.pinimg.com/originals/88/3d/06/883d061da85cd5b7bc90b59ec8e35194.gif",
            "https://i.pinimg.com/originals/b0/ef/b9/b0efb97d86b01a53314eabf28b852626.gif",
            "https://i.pinimg.com/originals/1d/cd/42/1dcd42f292bbe31a4884cfb291279d26.gif",
            "https://i.pinimg.com/originals/f2/44/61/f244613d18a14b827f2aadf4febcbeec.gif",
            "https://i.pinimg.com/originals/8c/de/6c/8cde6c7cab8d14552f7eb07871f649a4.gif",
            "https://i.pinimg.com/originals/4b/df/32/4bdf32ea77e44799b72c35bbf581f93b.gif",
            "https://i.pinimg.com/originals/65/ba/d0/65bad0c0b29846b7ff4d82c312dd4471.gif",
            "https://i.pinimg.com/originals/b4/89/a0/b489a0397b25a3a04d6d3117c61b10f0.gif",
            "https://i.pinimg.com/originals/5c/08/af/5c08afecf4afc7db96062bcefce9616a.gif",
            "https://i.pinimg.com/originals/c3/05/8d/c3058d32f20340742d109be351f7014b.gif",
            "https://i.pinimg.com/originals/f9/69/17/f96917eca63c436bcd85f7798a38aaac.gif",
            "https://i.pinimg.com/originals/dd/01/d7/dd01d7f4b5a021849ab0a3e1a7f54c49.gif",
            "https://i.pinimg.com/originals/fc/5d/cd/fc5dcd6551c0bc325dd678d7f2977f8d.gif",
            "https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif",
            "https://i.pinimg.com/originals/9b/89/b1/9b89b1080007e16daeb40ff5ee346135.gif",
            "https://i.pinimg.com/originals/88/ee/ee/88eeee72c0b7b2cff66658e13318f0a1.gif",
            "https://i.pinimg.com/originals/ab/9c/6b/ab9c6b8407732e2b5499432ddb2ada43.gif",
            "https://i.pinimg.com/originals/a6/51/e7/a651e74bebe6c881a895532f10af5c16.gif",
            "https://i.pinimg.com/originals/8c/9a/a0/8c9aa0d21a9614e1e75bf65fb093accf.gif",
            "https://i.pinimg.com/originals/33/75/a9/3375a97d4df29cf74794b71e3439a1fc.gif",
            "https://i.pinimg.com/originals/02/c5/0a/02c50ab659e68556c4c04fe49d0f3ddf.gif",
            "https://i.pinimg.com/originals/84/d1/00/84d100bac211046b4f17d64f81710478.gif",
            "https://i.pinimg.com/originals/1a/49/50/1a49508f0779aa8a1d1b2727b8c76fc5.gif",
            "https://i.pinimg.com/originals/b0/ef/b9/b0efb97d86b01a53314eabf28b852626.gif",
            "https://i.pinimg.com/originals/e4/29/bb/e429bb7c9759c7415bdb7f7474752dd9.gif",
            "https://i.pinimg.com/originals/35/ad/73/35ad7310a503c4d6f4230669275bbdbe.gif",
            "https://i.pinimg.com/originals/4b/e4/68/4be46841032506b311d43b8d49c6a58a.gif",
            "https://i.pinimg.com/originals/ce/a0/b1/cea0b15ecae64bc7b1fae8dd981fea7d.gif",
            "https://i.pinimg.com/originals/f8/56/7d/f8567dcc93cf8bc814c91c623187bb33.gif",
            "https://i.pinimg.com/originals/e7/45/d6/e745d6fcd41963a8a6d36c4b66c009a9.gif",
            "https://i.pinimg.com/originals/19/e7/41/19e7419c81ad5b9234155762db565e3b.gif",
            "https://i.pinimg.com/originals/d9/17/b8/d917b8a9648978c0ab377c1a1faea735.gif",
            "https://i.pinimg.com/originals/18/ff/b2/18ffb2db0a93ed863a288ec710533d2c.gif",
            "https://i.pinimg.com/originals/ee/3d/20/ee3d207ab8058632b2eff084a15340a2.gif",
            "https://i.pinimg.com/originals/28/89/f2/2889f2aec66e3a7c7b7ff2ab78675b77.gif",
            "https://i.pinimg.com/originals/8c/de/6c/8cde6c7cab8d14552f7eb07871f649a4.gif",
            "https://i.pinimg.com/originals/28/89/f2/2889f2aec66e3a7c7b7ff2ab78675b77.gif",
            "https://i.pinimg.com/originals/0f/fb/1d/0ffb1d0d6ab80af9c26c656548c91461.gif",
            "https://i.pinimg.com/originals/2c/af/a1/2cafa1a3fc1e248ef49136e396bc8e63.gif",
            "https://i.pinimg.com/originals/dd/01/d7/dd01d7f4b5a021849ab0a3e1a7f54c49.gif",
            "https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif"],
            showModal: false,
        popImageUrl: ""
        };
    }
    render() {
        let imageUrlArray = this.state.imageUrlArray;
        const images = imageUrlArray.map((url, index) => {
        return (
         <img 
         className="singleImage"
         alt = ""
         src={url}
         key={index}
         />
        )
        })
return (
<div className="Images">
    {images}
</div>
    ); 
  } 
}


export default Images;