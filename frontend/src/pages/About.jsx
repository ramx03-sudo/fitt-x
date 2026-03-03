import { ExternalLink, ArrowRight } from 'lucide-react';
import ramImg from '../assets/ram.png';
import sukumarImg from '../assets/sukumar.png';

export default function About() {
    return (
        <div className="page-container" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

            {/* HER HEADER SECTION */}
            <section style={{ paddingTop: '150px', paddingBottom: '80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="animate-fade-up" style={{ fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: '800', letterSpacing: '-0.02em', margin: '0 0 1.5rem 0' }}>
                        Meet the Founders
                    </h1>
                    <p className="animate-fade-up delay-100" style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto', fontWeight: '400' }}>
                        The Directors shaping the future of human performance, discipline, and health technology.
                    </p>
                </div>
            </section>

            {/* FOUNDERS GRID */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Sukumar */}
                    <div className="animate-fade-up delay-100" style={{ position: 'relative', background: 'var(--bg-primary)', padding: '12rem 3rem 4rem 3rem', borderRadius: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', marginTop: '140px' }}>

                        <div style={{ position: 'absolute', top: '-160px', left: '2rem', height: '420px', pointerEvents: 'none', zIndex: 10, WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' }}>
                            <img src={sukumarImg} alt="Sukumar Pilli" style={{ height: '100%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom left' }} />
                        </div>

                        <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '0.5rem' }}>Sukumar Pilli</h2>
                            <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Founder & CEO</h3>
                            <a href="https://www.linkedin.com/in/satya-sukumar-pilli-b3bb59218/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', marginBottom: '2rem', fontSize: '14px', fontWeight: '500' }}>
                                View LinkedIn <ExternalLink size={16} />
                            </a>

                            <div style={{ marginBottom: '2rem', flex: 1 }}>
                                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                    Sukumar is the visionary behind Fitt-X — the originator of the idea and the driving force behind the mission to redefine discipline, lifestyle transformation, and human performance. He believes the world needs a system that builds the strongest generation ever, not just another fitness gadget.
                                </p>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                    As Co-Founder and Director, Sukumar guides the company’s innovation roadmap, product philosophy, and long-term health-tech direction. His thinking blends behavioral science, psychology, performance optimization, and next-generation wearable technology.
                                </p>
                                <h4 style={{ fontWeight: '600', marginBottom: '0.8rem', fontSize: '16px', color: 'var(--text-primary)' }}>Key Leadership Strengths:</h4>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>• Behavioral system engineering</li>
                                    <li>• Product strategy & innovation</li>
                                    <li>• Long-term ecosystem vision</li>
                                    <li>• Team leadership & scalability</li>
                                    <li>• Health, lifestyle & discipline frameworks</li>
                                </ul>
                            </div>

                            <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px' }}>
                                <p style={{ fontStyle: 'italic', fontWeight: '500', color: 'var(--text-primary)', margin: 0, fontSize: '16px', lineHeight: '1.6' }}>
                                    “To build a generation that is healthier, more disciplined, and mentally stronger — using technology that genuinely transforms daily life.”
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Ram */}
                    <div className="animate-fade-up delay-200" style={{ position: 'relative', background: 'var(--bg-primary)', padding: '12rem 3rem 4rem 3rem', borderRadius: '24px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', marginTop: '140px' }}>

                        <div style={{ position: 'absolute', top: '-160px', left: '2rem', height: '420px', pointerEvents: 'none', zIndex: 10, WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)' }}>
                            <img src={ramImg} alt="Ram Mamillapalli" style={{ height: '100%', width: 'auto', objectFit: 'contain', objectPosition: 'bottom left' }} />
                        </div>

                        <div style={{ position: 'relative', zIndex: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '0.5rem' }}>Ram Mamillapalli</h2>
                            <h3 style={{ fontSize: '18px', fontWeight: '500', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Co-Founder & COO</h3>
                            <a href="https://www.linkedin.com/in/ram-mamillapalli/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none', marginBottom: '2rem', fontSize: '14px', fontWeight: '500' }}>
                                View LinkedIn <ExternalLink size={16} />
                            </a>

                            <div style={{ marginBottom: '2rem', flex: 1 }}>
                                <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                                    Ram is the engineering and design powerhouse of Fitt-X — bringing the product to life through modern development, visual identity, and seamless user experience.
                                </p>
                                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                                    As Co-Founder, Director & Chief Technology & Design Officer, he handles all software-related tasks, engineering responsibilities, and technical operations at Fitt-X. He leads product execution, UI/UX, frontend engineering, and the premium futuristic aesthetic that defines the brand. His work ensures the platform is fast, elegant, stable, and visually world-class.
                                </p>
                                <h4 style={{ fontWeight: '600', marginBottom: '0.8rem', fontSize: '16px', color: 'var(--text-primary)' }}>Key Leadership Strengths:</h4>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li>• Software engineering & technical architecture</li>
                                    <li>• Design systems & user experience</li>
                                    <li>• Brand aesthetic & visual storytelling</li>
                                    <li>• AI-assisted prototyping & product execution</li>
                                    <li>• Multidisciplinary creative direction</li>
                                </ul>
                            </div>

                            <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px' }}>
                                <p style={{ fontStyle: 'italic', fontWeight: '500', color: 'var(--text-primary)', margin: 0, fontSize: '16px', lineHeight: '1.6' }}>
                                    “To create technology that feels futuristic yet deeply human — and to make Fitt-X the most premium lifestyle-tech brand on the planet.”
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* OUR STORY */}
            <section style={{ padding: '120px 0', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '4rem' }}>Our Story</h2>
                    <p style={{ fontSize: '24px', fontWeight: '500', marginBottom: '3rem', color: 'var(--text-primary)' }}>
                        Fitt-X began with a simple but powerful belief:<br />
                        <span style={{ fontSize: '28px', fontWeight: '700', marginTop: '1.5rem', display: 'block' }}>“People don’t need more tracking — they need transformation.”</span>
                    </p>
                    <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        Sukumar initiated the concept to solve real problems: lack of discipline, digital addiction, inconsistent routines, rising stress levels, and the absence of tools that truly help people grow.
                    </p>
                    <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        Ram joined soon after, bringing technical execution, design mastery, and product-building leadership to turn the vision into a functioning reality.
                    </p>
                    <p style={{ fontSize: '20px', color: 'var(--text-primary)', fontWeight: '500', lineHeight: '1.8', marginTop: '2rem' }}>
                        Together, as Directors and Co-Founders, they built Fitt-X to be much more than a fitness product — it is a complete lifestyle ecosystem engineered for the next generation.
                    </p>
                </div>
            </section>

            {/* WHY WE BUILT FITT-X (Split Layout) */}
            <section style={{ padding: '120px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container section-type-a">
                    <h2 style={{ fontSize: 'clamp(40px, 5vw, 56px)', fontWeight: '700' }}>Why We Built<br />Fitt-X</h2>
                    <div style={{ flex: '1.2' }}>
                        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.8' }}>
                            We built Fitt-X because the world is facing a rise in digital addiction, collapsing discipline, poor lifestyle habits, and declining health. Most wearables only track numbers — they don’t fix the root of the problem.
                        </p>
                        <p style={{ fontSize: '22px', color: 'var(--text-primary)', fontWeight: '600', marginBottom: '1.5rem' }}>Fitt-X is designed to:</p>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 3rem 0', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '20px' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><ArrowRight size={20} color="var(--text-primary)" /> Rebuild discipline</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><ArrowRight size={20} color="var(--text-primary)" /> Improve daily habits</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><ArrowRight size={20} color="var(--text-primary)" /> Protect children and elders</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><ArrowRight size={20} color="var(--text-primary)" /> Enhance long-term healthspan</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><ArrowRight size={20} color="var(--text-primary)" /> Strengthen mental and physical performance</li>
                        </ul>
                        <p style={{ fontSize: '24px', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.6' }}>
                            This is not a product.<br />
                            It’s a movement toward a stronger society.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOUNDERS PHILOSOPHY */}
            <section style={{ padding: '120px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '5rem', fontSize: '48px' }}>The Philosophy</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                        {/* Col 1 */}
                        <div style={{ padding: '3.5rem', background: 'var(--bg-primary)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem' }}>Discipline is Identity</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '1rem', lineHeight: '1.6' }}>Your habits shape who you become.</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>Fitt-X is designed to rewire consistency at the neurological level.</p>
                        </div>

                        {/* Col 2 */}
                        <div style={{ padding: '3.5rem', background: 'var(--bg-primary)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem' }}>Fitness is Science</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '0.8rem', lineHeight: '1.6' }}>Every movement can be measured.</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '0.8rem', lineHeight: '1.6' }}>Every rep can be optimized.</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>Every injury can be prevented.</p>
                        </div>

                        {/* Col 3 */}
                        <div style={{ padding: '3.5rem', background: 'var(--bg-primary)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '1.5rem' }}>Longevity is the Future</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6' }}>Nanotechnology + AI = the next era of healthspan engineering.</p>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
}
