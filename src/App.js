import './App.css';
import backgroundimage from './images/illustration-intro.svg'
import anisha from './images/avatar-anisha.png'
import ali from './images/avatar-ali.png'
import richard from './images/avatar-richard.png'
import shanai from './images/avatar-shanai.png'
function App() {

 

  return (
    <div className="App">
      <div className='main'>
        <div className='sub-con'>
          <h1 className='bring'> Bring everyone together to build better products.</h1>
          <p className='manage'>Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view.</p>
          <button className='btn'>Get Started</button>
        </div>
        <div className='sub-con1'>
        <img src={backgroundimage} alt="" className='intro'/>
        </div>
      </div>

      <div className='main-1'>
        <div className='sub-con2'>
          <h1 className='whats'>What’s different about Manage?</h1>
          <p className='manage'>
          Manage provides all the functionality your team needs, without 
          the complexity. Our software is tailor-made for modern digital 
          product teams. 
          </p>
        </div>

        <div className='sub-con3'>
           <div className='num'>
            <p className='num1'>01</p>
            <p className='track'>Track company-wide progress</p>
           </div>
           <p className='see-how'>
           See how your day-to-day tasks fit into the wider vision. Go from 
           tracking progress at the milestone level all the way done to the 
           smallest of details. Never lose sight of the bigger picture again.
           </p>
          
           <div className='num'>
            <p className='num1'>02</p>
            <p className='track'>Advanced built-in reports</p>
           </div>
           <p className='see-how'>
           Set internal delivery estimates and track progress toward company 
           goals. Our customisable dashboard helps you build out the reports 
           you need to keep key stakeholders informed.
           </p>

           <div className='num'>
            <p className='num1'>03</p>
            <p className='track'>Everything you need in one place</p>
           </div>
           <p className='see-how'>
           Stop jumping from one service to another to communicate, store files, 
           track tasks and share documents. Manage offers an all-in-one team 
           productivity solution.
           </p>
        </div>
      </div>

      <div className='main-2'>
          <h1>What they’ve said</h1>

          <div className="marquee">
        <div className="marquee-content">
          <div className="sub-con-6">
            <img src={anisha} alt="" className="img" />
            <h3 className="anisha">Anisha Li</h3>
            <div className="text">
            <p className="has">“Manage has supercharged our team’s workflow. The ability to maintain 
              visibility on larger milestones at all times keeps everyone motivated.”</p>
            </div>
          </div>

          <div className="sub-con-6">
            <img src={ali} alt="" className="img" />
            <h3 className="anisha">Ali Bravo</h3>
            <p className="has">“We have been able to cancel so many other subscriptions since using 
              Manage. There is no more cross-channel confusion and everyone is much 
              more focused.”</p>
          </div>

          <div className="sub-con-6">
            <img src={richard} alt="" className="img" />
            <h3 className="anisha">Richard Watts</h3>
            <p className="has">“Manage allows us to provide structure and process. It keeps us organized 
              and focused. I can’t stop recommending them to everyone I talk to!”</p>
          </div>

          <div className="sub-con-6">
            <img src={shanai} alt="" className="img" />
            <h3 className="anisha">Shanai Gough</h3>
            <p className="has">“Their software allows us to track, manage and collaborate on our projects 
              from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
          </div>

          <div className="sub-con-6">
            <img src={anisha} alt="" className="img" />
            <h3 className="anisha">Anisha Li</h3>
            <div className="text">
            <p className="has">“Manage has supercharged our team’s workflow. The ability to maintain 
              visibility on larger milestones at all times keeps everyone motivated.”</p>
            </div>
          </div>

          <div className="sub-con-6">
            <img src={ali} alt="" className="img" />
            <h3 className="anisha">Ali Bravo</h3>
            <p className="has">“We have been able to cancel so many other subscriptions since using 
              Manage. There is no more cross-channel confusion and everyone is much 
              more focused.”</p>
          </div>

          <div className="sub-con-6">
            <img src={anisha} alt="" className="img" />
            <h3 className="anisha">Anisha Li</h3>
            <p className="has">“Manage allows us to provide structure and process. It keeps us organized 
              and focused. I can’t stop recommending them to everyone I talk to!”</p>
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
