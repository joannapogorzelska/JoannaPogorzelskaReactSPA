import React from 'react'
import '../style/home.css'

import imgSzparagi from '../image/szparagi384.jpg'
import imgFoccacia from '../image/pizza384.jpg'
import imgPho from '../image/pho384.jpg'
import imgSernik from '../image/sernik384.jpg'

function Home() {
    return (<div className="article clearfix">
            <div >
                <div  className="box clearfix">
                <article className="clearfix">
                    <h2>Śniadania</h2>
                    <div className="food clearfix">
                        <img src={imgSzparagi} alt="szparagi z jajkiem" />
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo vitae praesentium nemo non quisquam? Labore delectus libero placeat corporis? Culpa.</p>
                </article>
                <article className="clearfix">
                   <h2>Przekąski</h2>
                   <div className="food clearfix">
                    <img src={imgFoccacia} alt="foccacia" />
                   </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum deleniti ullam cumque alias rerum soluta omnis inventore quos nisi mollitia, at harum, culpa eaque doloremque nulla adipisci non! Quia facilis dignissimos obcaecati voluptatibus. Alias ex nulla fuga velit aperiam cum dignissimos veritatis in est eaque cumque ipsa, expedita dolorum saepe, accusamus illo repudiandae quasi, obcaecati porro hic. Sequi voluptatem sint deleniti non quaerat consectetur inventore explicabo repudiandae, incidunt, tempora ducimus assumenda! Vitae, eum. Omnis dicta architecto placeat molestiae ipsum, ducimus excepturi, quas eum qui repudiandae corporis nemo hic nihil consequuntur iusto. Consectetur asperiores numquam laboriosam expedita temporibus placeat culpa ad? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum deleniti ullam cumque alias rerum soluta omnis inventore quos nisi mollitia, at harum, culpa eaque doloremque nulla adipisci non! Quia facilis dignissimos obcaecati voluptatibus.</p>
                    
                </article>
                <article className="clearfix">
                    <h2>Obiady</h2>
                    <div className="food clearfix">
                    <img src={imgPho} alt="zupa pho" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim mollitia sequi commodi aspernatur, nesciunt vitae quas soluta blanditiis cum excepturi rem expedita sed natus quidem aut quaerat? Reprehenderit, ab?
                    </p>
                    </article>
                                    <article className=" clearfix">
                      <h2>Desery</h2>
                      <div className="food clearfix">
                    <img src={imgSernik} alt="sernik chia" />
                      </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem iste id dicta earum voluptate quidem, quo dolores explicabo qui, in quaerat fugiat inventore quae sequi dolor sapiente obcaecati, atque neque ratione! Excepturi veritatis ducimus voluptates sit quos aspernatur modi. Quo fugit sequi blanditiis esse consequatur maiores labore! A, dolorum dolor?</p>
                    </article>
            </div>
        </div>
        </div>)
            
}
export default Home