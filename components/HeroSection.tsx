'use client'
import{useEffect,useRef}from'react'
import gsap from'gsap'
import{ScrollTrigger}from'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function HeroSection(){
const videoRef=useRef<HTMLVideoElement>(null)
const sectionRef=useRef<HTMLDivElement>(null)
useEffect(()=>{
const video=videoRef.current
const section=sectionRef.current
if(!video||!section)return
video.load()
video.pause()
video.currentTime=0
ScrollTrigger.create({
trigger:section,
start:'top top',
end:'+=3000',
scrub:1,
onUpdate:(self)=>{
if(video.duration&&!isNaN(video.duration)){
video.currentTime=self.progress*video.duration
}
}
})
return()=>ScrollTrigger.getAll().forEach(t=>t.kill())
},[])
return(
<section ref={sectionRef} style={{height:'400vh',position:'relative'}}>
<div style={{position:'sticky',top:0,height:'100vh',overflow:'hidden'}}>
<video ref={videoRef} src="/hero.mp4" muted playsInline preload="auto" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
<div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.35))',zIndex:1}}/>
</div>
</section>
)
}