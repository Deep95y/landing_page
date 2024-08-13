import './index.css';
import { FaHeart } from 'react-icons/fa';


const LandingPage = () => {


  return(
        <>
        <div style={{height:'100%', width:'100%',background:'black',display:'flex',flexDirection:'column',msOverflowY:'scroll',fontFamily:'sans-serif'}}>
            <div style={{display:'flex',flexDirection:'row',marginLeft:'8%',marginTop:'2%'}}>
                <div><img src = "SVG (10).png" style={{height:'80px',width:'80px'}}/></div>
                <div style={{color:'white',fontWeight:'bold',fontSize:'5rem',marginLeft:'2rem'}}>FormBot</div>
                <div style={{height:'120px',width:'250px',border:'1px solid blue',color:'blue',background:'black',fontSize:'15px',borderRadius:'15px',marginLeft:'70%',textAlign:'center',cursor:'pointer'}}><p style={{marginTop:'2rem',fontSize:'3rem'}}>Sign in</p></div>
                <div style={{height:'120px',width:'450px',borderStyle:'none',color:'white',background:'#1A5FFF',fontSize:'15px',borderRadius:'15px',marginLeft:'2rem',textAlign:'center',cursor:'pointer'}} ><p style={{marginTop:'2rem',fontSize:'3rem'}}>Create a FormBot</p></div>
            </div>
            <div style={{position:'absolute',marginTop:'8%'}}><img src = "SVG (1).png" style={{height:'60rem',width:'60rem'}}/></div>
            <div style={{position:'absolute',marginTop:'10%',marginLeft:'85%'}}><img src = "SVG.png" style={{height:'50rem',width:'50rem'}}/></div>
            <div style={{marginLeft:'20%',marginTop:'6%'}}><img src = "Build advanced chatbots visually.png" style={{height:'35rem',width:'200rem'}}/></div>
            <div style={{color:'white',fontSize:'6.5rem',marginTop:'15rem',marginLeft:'20%'}}>Typebot gives you powerful block to create unique chat experiences.Embed them <br/><div style={{marginLeft:'3%'}}>anywhere on your web/mobile app and start collecting result like magic</div></div>
            <div style={{height:'170px',width:'900px',borderStyle:'none',color:'white',background:'#1A5FFF',fontSize:'15px',borderRadius:'15px',marginLeft:'42%',textAlign:'center',marginTop:'6rem',cursor:'pointer'}} ><p style={{marginTop:'3rem',fontSize:'4rem'}}>Create a formBot for free</p></div>
            <div style={{marginTop:'2rem',marginLeft:'5%'}}><img src = "Container.png" style={{height:'150rem',width:'300rem'}}/></div>
            <div style={{color:'white',fontSize:'8rem',fontWeight:'bold',marginLeft:'35%',display:'flex',flexDirection:'column'}}><div>Replace your old school forms </div><div style={{marginLeft:'45rem'}}>with </div><div style={{marginLeft:'38rem'}}>chatsbot</div></div>
            <div style={{color:'#A0AEC0',fontSize:'5rem',marginLeft:'13%',display:'flex',flexDirection:'column',marginTop:'2%'}}><div>Typebot is better way to ask for information. it leads to an increase in customer satisfaction and retention and multiply by </div><div style={{marginLeft:'43%'}}>3</div><div style={{marginLeft:'27%'}}>your conversion rate compared to classical forms.</div></div>
            <div style={{marginTop:'2rem',marginLeft:'6%'}}><img src = "Container (1).png" style={{height:'150rem',width:'300rem'}}/></div>
            <div style={{marginTop:'10%',marginLeft:'23%',display:'flex',flexDirection:'row'}}>
                <div><img src = "image.png" style={{height:'80rem',width:'120rem'}}/></div>
                <div style={{display:'flex', flexDirection:'column',marginLeft:'10%',marginTop:'2%'}}>
                    <div style={{fontSize:'90px',fontWeight:'bold',color:'white'}}>Easy building </div>
                    <div style={{fontSize:'90px',fontWeight:'bold',color:'white'}}>experience</div>
                    <div style={{color:'#A0AEC0', fontSize:'60px',marginTop:'7%'}}>All you have to do is to drag and </div>
                    <div style={{color:'#A0AEC0', fontSize:'60px'}}>drop blocks to create your app.</div> 
                    <div style={{color:'#A0AEC0', fontSize:'60px'}}>Even if you have custom needs</div>
                    <div style={{color:'#A0AEC0', fontSize:'60px'}}>you can always add custom codes</div>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                 <div style={{display:'flex',flexDirection:'column',marginTop:'10%',marginLeft:'23%'}}>
                    <div style={{fontSize:'90px',fontWeight:'bold',color:'white'}}>Embed it in a click</div>
                    <div style={{color:'#A0AEC0', fontSize:'60px',marginTop:'7%'}}>Embedding your typebot in </div>
                    <div style={{color:'#A0AEC0', fontSize:'60px'}}>your application is a walk in</div> 
                    <div style={{color:'#A0AEC0', fontSize:'60px'}}>the park. typebot gives you</div> 
                    <div style={{color:'#A0AEC0', fontSize:'60px'}}>several step-by-step platform</div> 
                    <div style={{color:'#A0AEC0', fontSize:'60px'}}>specific instructions. Your </div>
                    <div style={{color:'#A0AEC0', fontSize:'60px'}}>typeBot will always feel "native"</div>
                 </div>
                <div style={{marginTop:'7%'}}><img src = "/image.svg"  style={{height:'80rem',width:'190rem'}}/></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',marginTop:'5%',marginLeft:'17%'}}>
                <div><img src = "mail.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "monkey.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "notion.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "window.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "wordpress.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "calender.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "network.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "drive.png" style={{height:'17rem',width:'16rem'}}/></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',marginTop:'10rem',marginLeft:'17%'}}>
                <div style={{marginLeft:'12rem'}}><img src = "slack.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "shopify.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "desk.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "excel.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "zapier.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "cshape.png" style={{height:'17rem',width:'16rem'}}/></div>
                <div style={{marginLeft:'12rem'}}><img src = "sales.png" style={{height:'17rem',width:'16rem'}}/></div>
            </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'2%',marginLeft:'25%'}}>
           <div style={{fontSize:'5rem',fontWeight:'bold',color:'white'}}>Integrate with any platform</div>
           <div style={{fontSize:'3rem',color:'#A0AEC0',marginTop:'2rem'}}>Typebot offers several native integration blocks as well as integrations on </div>
           <div style={{fontSize:'3rem',color:'#A0AEC0'}}>how to embed a typebot on particular platform</div>
        </div>

        <div style={{display:'flex',flexDirection:'column',marginTop:'10%'}}>
            <div style={{fontSize:'9rem',fontWeight:'bolder',color:'white',marginLeft:'35%'}}>Collect results in real-time</div>
           <div style={{fontSize:'3rem',color:'#A0AEC0',marginTop:'3rem',marginLeft:'32%'}}>One of the main advatage of chat application is that you collect the users response on each questions</div>
           <div style={{fontSize:'4rem',color:'#A0AEC0',marginLeft:'42%',marginTop:'1rem'}}>You wont loose any valuable data </div>
        </div>

        <div style={{marginTop:'5%',marginLeft:'35%'}}><img src = "Background.png" style={{height:'80rem',width:'100rem'}}/></div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'7%',marginLeft:'25%'}}>
           <div style={{fontSize:'5rem',fontWeight:'bold',color:'white',marginLeft:'22%'}}>And many more features</div>
           <div style={{fontSize:'3rem',color:'#A0AEC0',marginTop:'2rem',marginLeft:'17%'}}>Typebot makes form building easy and comes with powerful features </div>
        </div>
        <div style={{display:'flex',flexDirection:'row',position:'absolute',marginTop:'288%',marginLeft:'27%'}}>
        <div style={{}}><img src = "Background+Shadow (5).png" style={{height:'13rem',width:'13rem'}}/></div>
        <div style={{marginLeft:'155%'}}><img src = "Background+Shadow (4).png" style={{height:'13rem',width:'13rem'}}/></div>
        <div style={{marginLeft:'157%'}}><img src = "Background+Shadow (3).png" style={{height:'13rem',width:'13rem'}}/></div>
        </div>

        <div style={{display:'flex',flexDirection:'row',marginLeft:'20%',marginTop:'15rem'}}>
             
             <div style={{height:'30rem',width:'60rem',background:'#1A202C',borderRadius:'15px',borderStyle:'none',display:'flex',flexDirection:'column',color:'#718096',fontSize:'3rem',textAlign:'center'}}><div style={{marginTop:'5rem',fontWeight:'bold',fontSize:'4rem',color:'white'}}>Hidden fields</div><div style={{marginTop:'3rem'}}>Include data in your form URL to segment</div> <div>your user and use its data directly in you</div> <div>form</div></div>
             <div style={{height:'30rem',width:'60rem',background:'#1A202C',borderRadius:'15px',borderStyle:'none',marginLeft:'5%',display:'flex',flexDirection:'column',color:'#718096',fontSize:'3rem',textAlign:'center'}}> <div style={{marginTop:'5rem',fontWeight:'bold',fontSize:'4rem',color:'white'}}>Team Collaboration</div><div style={{marginTop:'3rem'}}>Invite your teammates to work on your</div> <div>typebot with you</div></div>
             <div style={{height:'30rem',width:'60rem',background:'#1A202C',borderRadius:'15px',borderStyle:'none',marginLeft:'5%',display:'flex',flexDirection:'column',color:'#718096',fontSize:'3rem',textAlign:'center'}}> <div style={{marginTop:'5rem',fontWeight:'bold',fontSize:'4rem',color:'white'}}>Link to Sub typebots</div><div style={{marginTop:'3rem'}}> Reuse your typebots in different parent</div> <div>bots</div></div>
        </div>

        <div style={{display:'flex',flexDirection:'row',position:'absolute',marginTop:'300%',marginLeft:'27%'}}>
        <div style={{}}><img src = "Background+Shadow (2).png" style={{height:'13rem',width:'13rem'}}/></div>
        <div style={{marginLeft:'155%'}}><img src = "Background+Shadow (1).png" style={{height:'13rem',width:'13rem'}}/></div>
        <div style={{marginLeft:'155%'}}><img src = "Background+Shadow.png" style={{height:'13rem',width:'13rem'}}/></div>
        </div>

        <div style={{display:'flex',flexDirection:'row',marginLeft:'20%',marginTop:'10rem'}}>
             <div style={{height:'30rem',width:'60rem',background:'#1A202C',borderRadius:'15px',borderStyle:'none',display:'flex',flexDirection:'column',textAlign:'center',color:'#718096',fontSize:'3rem'}}><div  style={{marginTop:'5rem',fontWeight:'bold',fontSize:'4rem',color:'white'}}>Custom Code</div><div style={{marginTop:'5rem'}}>Customize everything with your own </div> <div>javascript and CSS code</div></div>
             <div style={{height:'30rem',width:'60rem',background:'#1A202C',borderRadius:'15px',borderStyle:'none',marginLeft:'5%',display:'flex',flexDirection:'column',color:'#718096',fontSize:'3rem',textAlign:'center'}}> <div style={{marginTop:'5rem',fontWeight:'bold',fontSize:'4rem',color:'white'}}>Custom domain</div><div style={{marginTop:'5rem'}}>Connect your typebot to custom URL</div> <div>of your choice</div></div>
             <div style={{height:'30rem',width:'60rem',background:'#1A202C',borderRadius:'15px',borderStyle:'none',marginLeft:'5%',display:'flex',flexDirection:'column',color:'#718096',fontSize:'3rem',textAlign:'center'}}> <div style={{marginTop:'5rem',fontWeight:'bold',fontSize:'4rem',color:'white'}}>Folder Management</div><div style={{marginTop:'5rem'}}>Organize your typebot in a specific folders</div> <div>to keep it clean and work wih multiple</div> <div>clients</div></div>
        </div>
       <div style={{color:'white',fontSize:'5rem',fontWeight:'bold',margin:'auto',marginTop:'6rem'}}>Loved by teams and creators from all around the world</div>
       <div className="logos" style={{height:'50rem',marginTop:'4rem',display:'flex',flexDirection:'column'}}>
           <div style={{display:'flex',flexDirection:'row',marginTop:'10rem'}}>
            <div style={{marginLeft:'25%'}}><img src = "SVG (9).png" style={{height:'8rem',width:'40rem'}}/></div>
            <div style={{marginLeft:'5rem'}}><img src = "SVG (8).png" style={{height:'8rem',width:'40rem'}}/></div>
            <div style={{marginLeft:'5rem'}}><img src = "SVG (7).png" style={{height:'8rem',width:'40rem'}}/></div>
            <div style={{marginLeft:'5rem'}}><img src = "SVG (6).png" style={{height:'8rem',width:'40rem'}}/></div>
           </div>

           <div style={{display:'flex',flexDirection:'row',marginTop:'10rem'}}>
            <div style={{marginLeft:'25%'}}><img src = "SVG (5).png" style={{height:'8rem',width:'40rem'}}/></div>
            <div style={{marginLeft:'5rem'}}><img src = "SVG (4).png" style={{height:'8rem',width:'40rem'}}/></div>
            <div style={{marginLeft:'5rem'}}><img src = "SVG (3).png" style={{height:'8rem',width:'40rem'}}/></div>
            <div style={{marginLeft:'5rem'}}><img src = "SVG (2).png" style={{height:'8rem',width:'40rem'}}/></div>
           </div>
       </div>

       <div className='footer' style={{height:'145rem',display:'flex'}}>
       <div style={{position:'absolute',}}><img src = "SVG (1).png" style={{height:'60rem',width:'60rem'}}/></div>
       <div style={{position:'absolute',marginTop:'10%',marginLeft:'85%'}}><img src = "SVG.png" style={{height:'50rem',width:'50rem'}}/></div>
       <div style={{display:'flex',flexDirection:'column',color:'white',fontSize:'10rem',marginTop:'14%',marginLeft:'25%'}}><div>Improve conversion and user engagement </div><div style={{marginLeft:'30%'}}>with FormBots</div></div>
       <div style={{height:'10rem',width:'50rem',background:'#1A5FFF',color:'white',display:'flex',borderStyle:'none',borderRadius:'20px',marginTop:'23%',fontSize:'4rem',position:'absolute',marginLeft:'41.5%'}}><div style={{marginTop:'3rem',marginLeft:'11rem',cursor:'pointer'}}>Create a FormBot</div></div>
       <div style={{color:'#A0AEC0',position:'absolute',marginTop:'28%',marginLeft:'42%',fontSize:'4rem',display:'flex',flexDirection:'row'}}>No trials.Generous<div style={{fontWeight:'bold',marginLeft:'1rem'}}>free</div><div style={{marginLeft:'1rem'}}>plans</div></div>
       </div>

       <div style={{display:'flex',flexDirection:'row',height:'40rem',fontSize:'4rem',marginTop:'4rem'}}>
           <div style={{display:'flex',flexDirection:'column',color:'white',marginLeft:'30%'}}>
                <div>Made with <FaHeart size={60} color="red" /> </div>
                <div style={{marginTop:'2rem'}}>@ by Deepa</div>
           </div>
           <div style={{display:'flex',flexDirection:'column',color:'white',marginLeft:'5%'}}>
                <div>Status</div>
                <div style={{marginTop:'2rem'}}>Documentation</div>
                <div style={{marginTop:'2rem'}}>Roadmap</div>
                <div style={{marginTop:'2rem'}}>Pricing</div>
           </div>

           <div style={{display:'flex',flexDirection:'column',color:'white',marginLeft:'5%'}}>
                <div>Discord</div>
                <div style={{marginTop:'2rem'}}>Github repository</div>
                <div style={{marginTop:'2rem'}}>Twitter</div>
                <div style={{marginTop:'2rem'}}>Linkedin</div>
                <div style={{marginTop:'2rem'}}>OSS friends</div>
           </div>

           <div style={{display:'flex',flexDirection:'column',color:'white',marginLeft:'5%'}}>
                <div>About</div>
                <div style={{marginTop:'2rem'}}>Contact</div>
                <div style={{marginTop:'2rem'}}>Terms of Service</div>
                <div style={{marginTop:'2rem'}}>Privacy Policy</div>
           </div>
       </div>
       
        </div>
        </>
    );
}

export default LandingPage;