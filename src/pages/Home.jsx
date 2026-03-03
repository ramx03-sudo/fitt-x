import { Link } from 'react-router-dom';
import { ChevronDown, Shield, Zap, Activity, Brain } from 'lucide-react';
import FitnessBand3D from '../components/FitnessBand3D';

export default function Home() {
    return (
        <div className="bg-primary text-primary-themed">

            {/* HERO SECTION */}
            <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 2rem', overflow: 'hidden' }}>

                {/* Soft centered glow behind hero text for depth */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, var(--glow-color) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none', transition: 'background 0.4s ease' }}></div>

                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginTop: '10vh' }}>
                    <h1 className="animate-fade-up" style={{ marginBottom: '2rem' }}>
                        Wear the Future.<br />
                        <span style={{ background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Live with Purpose.</span>
                    </h1>

                    <p className="animate-fade-up delay-100" style={{ maxWidth: '800px', margin: '0 auto 4rem', fontSize: '24px' }}>
                        A new era of human evolution begins here.<br />
                        FITT-X integrates nanotechnology, AI, and behavioral science to build stronger bodies, sharper minds, safer families, and longer, healthier lives.
                    </p>

                    <div className="animate-fade-up delay-200" style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                        <Link to="/products" className="btn btn-primary">
                            Get Early Access
                        </Link>
                        <Link to="/technology" className="btn btn-secondary">
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Minimal Scroll Indicator */}
                <div className="animate-fade-up delay-300 text-primary-themed" style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', opacity: 0.5 }}>
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* SECTION TYPE A – WHAT MAKES FITT-X DIFFERENT */}
            <section className="container section-type-a">
                <h2 className="animate-fade-up">
                    This is not a fitness tracker.<br />
                    This is your evolution.
                </h2>
                <div className="animate-fade-up delay-100">
                    <p style={{ marginBottom: '2rem' }} className="text-primary-themed">
                        FITT-X is engineered as the first ecosystem that doesn’t just track human behavior — it actively improves it.
                    </p>
                    <p>
                        By combining biometric nanotechnology, intelligent coaching, and real-world safety tools, we help you transform the four core dimensions of your life:
                        Discipline, Fitness, Safety, and Longevity.
                    </p>
                </div>
            </section>

            {/* SECTION TYPE D – IMPACT METRICS */}
            <section className="bg-secondary">
                <div className="container section-type-d">
                    <div className="animate-fade-up">
                        <div className="stat-number">40%</div>
                        <div className="stat-label">Injury Reduction</div>
                        <p style={{ marginTop: '1rem', fontSize: '15px' }}>Enabled by real-time form correction, motion analysis & biomechanical mapping.</p>
                    </div>
                    <div className="animate-fade-up delay-100">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">AI Monitoring</div>
                        <p style={{ marginTop: '1rem', fontSize: '15px' }}>Always-on tracking of stress, sleep, movement, discipline patterns, and safety.</p>
                    </div>
                    <div className="animate-fade-up delay-200">
                        <div className="stat-number">100K+</div>
                        <div className="stat-label">Early Adopters</div>
                        <p style={{ marginTop: '1rem', fontSize: '15px' }}>A global movement striving for more.</p>
                    </div>
                </div>
            </section>

            {/* SECTION TYPE B – PRODUCT SHOWCASE (3D BAND) */}
            <section style={{ minHeight: '120vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container text-center animate-fade-up">
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', marginBottom: '1rem' }}>Hardware</p>
                    <h2 style={{ fontSize: '70px', marginBottom: '1rem' }}>FITT-X Band</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 6rem', fontSize: '22px' }}>
                        Nanotech sensors, precision tracking, safety alerts, form correction, and healthspan analysis — all from your wrist.
                    </p>
                </div>

                {/* Massive center product display */}
                <div style={{ width: '100%', height: '800px', position: 'relative' }} className="animate-fade-up delay-100">
                    <FitnessBand3D />
                </div>
            </section>

            {/* SECTION TYPE E – PILLARS GRID */}
            <section className="bg-secondary">
                <div className="container">
                    <h2 className="animate-fade-up" style={{ marginBottom: '6rem' }}>The Four Pillars.</h2>

                    <div className="section-type-e">
                        <div className="pillar-card animate-fade-up">
                            <Brain size={48} color="var(--accent-blue)" style={{ marginBottom: '2rem' }} />
                            <h3 className="pillar-title">1. Discipline</h3>
                            <p className="pillar-desc">
                                Consistency becomes automatic through our Habit Operating System. Daily routines, productivity cycles, and focus rhythms are designed around your biology.
                            </p>
                        </div>
                        <div className="pillar-card animate-fade-up delay-100">
                            <Activity size={48} color="var(--accent-cyan)" style={{ marginBottom: '2rem' }} />
                            <h3 className="pillar-title">2. Fitness</h3>
                            <p className="pillar-desc">
                                Your movement becomes a measurable science. 3D motion analysis, joint angle detection, and rep-by-rep form correction. Never perform a harmful rep again.
                            </p>
                        </div>
                        <div className="pillar-card animate-fade-up delay-200">
                            <Shield size={48} color="var(--accent-green)" style={{ marginBottom: '2rem' }} />
                            <h3 className="pillar-title">3. Safety</h3>
                            <p className="pillar-desc">
                                Your family — secured by intelligent monitoring. Child Mode tracks location and stress. Elder Mode tracks falls and heart irregularities. When every second matters, FITT-X responds.
                            </p>
                        </div>
                        <div className="pillar-card animate-fade-up delay-300">
                            <Zap size={48} color="var(--accent-purple)" style={{ marginBottom: '2rem' }} />
                            <h3 className="pillar-title">4. Longevity</h3>
                            <p className="pillar-desc">
                                Nanotechnology maps your biological age, stress history, cellular strain, and healthspan trajectory. Extend the quality of your life — not just the length.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION TYPE C – SPLIT LAYOUT (DASHBOARD) */}
            <section className="container section-type-c">
                <div className="animate-fade-up">
                    <h2 style={{ marginBottom: '2rem' }}>Absolute Control <br /> Dashboard.</h2>
                    <p style={{ marginBottom: '2rem' }} className="text-primary-themed">Your body, mind, and lifestyle — visualized in real time.</p>
                    <p>
                        A single screen to understand every dimension of your human performance, from your stress-to-performance curve to habit adherence, sleep depth, and nutrition alignment.
                    </p>
                </div>
                <div className="animate-fade-up delay-100" style={{ width: '100%', height: '500px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>Dashboard Interface Coming Soon</p>
                </div>
            </section>

            {/* USER SCENARIOS */}
            <section className="bg-secondary">
                <div className="container">
                    <h2 className="animate-fade-up text-center" style={{ marginBottom: '6rem' }}>Designed for every stage.</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem 2rem' }}>
                        <div className="animate-fade-up border-top-themed">
                            <h3 style={{ fontSize: '20px', marginBottom: '1rem', paddingTop: '1rem' }} className="border-top-themed">Students</h3>
                            <p style={{ fontSize: '16px' }}>Build discipline, control distractions, improve focus, and stay consistent.</p>
                        </div>
                        <div className="animate-fade-up delay-100 border-top-themed">
                            <h3 style={{ fontSize: '20px', marginBottom: '1rem', paddingTop: '1rem' }} className="border-top-themed">Athletes</h3>
                            <p style={{ fontSize: '16px' }}>Master form, reduce injuries, optimize training loads.</p>
                        </div>
                        <div className="animate-fade-up delay-200 border-top-themed">
                            <h3 style={{ fontSize: '20px', marginBottom: '1rem', paddingTop: '1rem' }} className="border-top-themed">Corporate Users</h3>
                            <p style={{ fontSize: '16px' }}>Balance stress, improve recovery, enhance productivity.</p>
                        </div>
                        <div className="animate-fade-up border-top-themed">
                            <h3 style={{ fontSize: '20px', marginBottom: '1rem', paddingTop: '1rem' }} className="border-top-themed">Parents & Children</h3>
                            <p style={{ fontSize: '16px' }}>Live location + emotional safety in real time.</p>
                        </div>
                        <div className="animate-fade-up delay-100 border-top-themed">
                            <h3 style={{ fontSize: '20px', marginBottom: '1rem', paddingTop: '1rem' }} className="border-top-themed">Elder Support</h3>
                            <p style={{ fontSize: '16px' }}>Continuous monitoring and instant alerts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS (Apple-style massive quote text) */}
            <section>
                <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    <div className="animate-fade-up text-center">
                        <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '600', marginBottom: '1rem', lineHeight: 1.2 }} className="text-primary-themed">
                            “This feels like I’ve unlocked a cheat code for my life.”
                        </p>
                        <p>— College Student</p>
                    </div>

                    <div className="animate-fade-up text-center">
                        <p style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: '600', marginBottom: '1rem', lineHeight: 1.2 }} className="text-primary-themed">
                            “Child safety mode is life-changing.”
                        </p>
                        <p>— Parent</p>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="bg-primary border-top-themed">
                <div className="container text-center animate-fade-up">
                    <h2 style={{ fontSize: 'clamp(60px, 8vw, 120px)', marginBottom: '1rem' }}>Begin Your <br /> Evolution.</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 4rem', fontSize: '22px' }}>The strongest generation in history will be built here.</p>

                    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                        <Link to="/products" className="btn btn-primary">
                            Get Early Access
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
