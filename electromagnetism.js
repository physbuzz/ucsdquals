

questiondata["EM"]=[
//Memorization
{q:"Write the formulas for cyclotron radius and frequency",a:"$R=\\frac{mv}{qB}$, $\\omega=\\frac{qB}{m}$."},
{q:"What are the units of voltage in terms of SI base units? (coulombs OK)",a:"$[V]=\\frac{\\text{kg} m^2}{s^2 C}$. Volts are newton-meters per coulomb."},
{q:"What are the units of capacitance in SI base units? (coulombs OK)",a:"$[C]=\\frac{C^2 s^2}{\\text{kg} m^2}$. Farads are volts per coulomb."},
{q:"What are the units of $\\varepsilon_0$ in terms of SI base units? (coulombs OK)",a:"$[\\varepsilon_0]=\\frac{C^2 s^2}{\\text{kg} m^3}$. One way is to remember $\\varepsilon_0$ is in farads per meter. Another can be done using dimensional analysis of the Coulomb force law: $\\frac{C^2}{[\\varepsilon_0] m^2}=N$."},
{q:"What are the units and value of $\\mu_0$ in terms of SI base units? (coulombs OK)",a:"$\\mu_0=4\\pi 10^{-7} \\frac{\\text{kg} m}{C^2}$. You can figure this out by noting that it's henries per meter, or you can balance the units in $\\nabla\\times B=\\mu_0 J$. $J$ is in amperes per square meter, $\\nabla$ has units $m^{-1}$, and $B$ has units $\\text{kg}/(s C)$."},
{q:"What are the units and value of inductance in terms of SI base units? (coulombs OK)",a:"$\\frac{\\text{kg} m^2}{c^2}$. to memorize this, just recall the energy stored in a conductor is one half $L I^2$."},
{q:"What are the units of electric field $\\vec{E}$ in SI base units? (coulombs OK)",a:"$\\frac{\\text{kg} m}{s^2 C}$, newtons per coulomb."},
{q:"What are the units of magnetic field $\\vec{B}$ in SI base units? (coulombs OK)",a:"$\\frac{\\text{kg}}{s C}$, tesla are newtons per coulomb-velocity."},
{q:"What are the units of polarization density $\\vec{P}$ in SI base units? (coulombs OK)",a:"$\\frac{C}{m^2}$. It is easy to remember that a dipole is the product of charge times distance, so per unit volume this is $Cm/m^3$."},
{q:"What are the units of electric displacement $\\vec{D}$ in SI base units? (coulombs OK)",a:"$\\frac{C}{m^2}$. Recall $\\vec{D}=\\varepsilon_0 \\vec{E}+\\vec{P}$, so it must have the same units as dipole moment density. Dipole moment is $C m$."},
{q:"What are the units of magnetization $\\vec{M}$ in SI base units? (coulombs OK)",a:"$\\frac{C}{m s}$. Magnetic dipoles have units $A\\cdot m^2$, so magnetic dipole density must be amperes per meter."},
{q:"What are the units of the magnetic $\\vec{H}$ field in SI base units? (coulombs OK)",a:"$\\frac{C}{m s}$. We have $\\vec{H}=\\frac{1}{\\mu_0} \\vec{B}-\\vec{M}$, with $M$ being magnetic dipole density. Magnetic dipoles have units $A\\cdot m^2$, so magnetic dipole density must be amperes per meter."},
{q:"What are the units of electric dipole moment in SI base units? (coulombs OK)",a:"$C m$. You take two charges $q$ and $-q$ a distance $d$ apart, and take $d$ to zero and $q$ to $\\infty$ while keeping  the product $p=qd$ the same."},
{q:"What are the units of magnetic dipole moment in SI base units? (coulombs OK)",a:"$\\frac{C m^2}{s}$, or ampere-meters squared. Best memorized by knowing that magnetic dipoles are basically little current loops."},
{q:"What are the units of the electromagnetic Poynting vector in SI base units? (coulombs OK)",a:"$\\frac{\\text{kg}}{s^3}$. The better phrasing is watts per square meter."},
{q:"Write the torque, force on, energy of a magnetic dipole.",a:"Torque: $\\vec{\\tau}=\\vec{m}\\times \\vec{B}$. Energy: $U=-\\vec{m}\\cdot\\vec{B}$. Force: $\\vec{F}=\\nabla(\\vec{m}\\cdot \\vec{B})=(\\vec{m}\\cdot\\nabla)\\vec{B}$."},
{q:"Write the energy stored in an inductor, and the voltage across an inductor.",a:"$U_I=\\frac{1}{2}LI^2$. $V=L \\frac{dI}{dt}$"},
{q:"Find the magnetic dipole moment of a current loop",a:"$\\vec{m}=I A\\hat{n}$"},
{q:"Find the vector potential of a magnetic dipole.",a:"$$\\vec{A}(\\vec{r})=\\frac{\\mu_0}{4\\pi r^2}\\vec{m}\\times \\hat{r}$$"},
{q:"What is the resistance of an object of length $\\ell$, cross-sectional area $A$, and resistivity $\\rho$?",a:"$R=\\frac{\\rho \\ell}{A}$"},
//Misc general and lower division
{q:"How do you find the equivalent capacitance, inductance, and resistance in series/parallel circuits?",a:"In series, resistances and inductances add, and $C^{-1}=C_1^{-1}+C_2^{-1}$. In parallel, capacitances add and the same inverse law is followed by resistances and inductances."},
{q:"Write the relevant ODEs and all resonances and time constants of the RC, RL, and LC circuits",a:"RL circuits (with a voltage across them) satisfy the equation $V=IR+L\\frac{dI}{dt}$, giving a time constant $\\tau=\\frac{L}{R}$. RC circuits (with a voltage across them) satisfy $V=R \\frac{dQ}{dt}+\\frac{1}{C}Q$, giving a time constant $\\tau=RC$. LC circuits (with a voltage across them) satisfy $\\frac{dV}{dt}=L \\frac{d^2 I}{dt^2}+\\frac{1}{C}I$, giving a natural angular frequency of $\\omega=\\frac{1}{\\sqrt{LC}}$ and a natural frequency of $f=\\frac{1}{2\\pi \\sqrt{LC}}$"},
{q:"What is the mechanism for paramagnetism? What is the relation between the magnetization $M$ and applied magnetic field $B$?",a:"Paramagnetism creates a magnetization vector $\\vec{M}$ in the same direction as $\\vec{B}$. A good model for paramagnetism is Pauli Paramagnetism."},
{q:"What is the mechanism for diamagnetism? What is the relation between the magnetization $M$ and applied magnetic field $B$?",a:"Diamagnetism creates a magnetization vector $\\vec{M}$ in the opposite direction from $\\vec{B}$. A good model for diamagnetism is Landau diamagnetism."},
{q:"How is ferromagnetism different from diamagnetism and paramagnetism?",a:"Ferromagnetism is a magnetization in the material which sticks around after the inducing field is switched off. ie, there is some $\\vec{M}$ even if there is no applied $\\vec{B}$ field."},
//Mathematical methods (Legendre polynomials, laplacian)
{q:"Write the generating function for the Legendre polynomials $L_n(x)$ (that is to say: give the function $G(t,x)$ whose formal expansion about $t=0$ is equal to $\\sum_{n=0}^\\infty t^n L_n(x)$)",a:"$G(t,x)=\\frac{1}{\\sqrt{1-2xt+t^2}}$."},
{q:"Calculate $\\int_{0}^\\pi L_n(\\cos(\\theta))\\sin(\\theta)d\\theta$",a:"Answer: $\\int_{0}^\\pi L_n(\\cos(\\theta))\\sin(\\theta)d\\theta=2\\delta_{n0}$ (two for $n=0$, zero otherwise). Apply the generating function $G(t,x)=\\frac{1}{\\sqrt{1-2xt+t^2}}=\\sum_{n=0}^\\infty t^n L_n(x)$. Clearly it suffices to consider the integral $I=\\int_{0}^\\pi \\frac{\\sin(\\theta)d\\theta}{\\sqrt{1-2\\cos(\\theta)t+t^2}}$. Switch variables to $y=-\\cos(\\theta)$ to get $I=\\int_{-1}^1 \\frac{dy}{\\sqrt{1+2yt+t^2}}$. Switch again to $z=1+2yt+t^2$ to find g$I=\\int_{(1-t)^2}^{1+t^2}\\frac{dz}{2t} z^{-\\frac{1}{2}}=\\frac{2}{2t}z^{\\frac{1}{2}}\\bigg\\rvert_{(1-t)^2}^{(1+t)^2}=2$. So $2=\\sum_{n=0}^\\infty  t^n \\int L_n(\\cos(\\theta))\\sin(\\theta)d\\theta$. Equating coefficient makes the result apparent!"},
{q:"Find the Laplacian of 1/r.",a:"$\\nabla^2 1/r=-4 \\pi \\delta(\\vec{r})$. Proof: You can verify $\\nabla^2 1/r=0$ everywhere away from the origin. But $\\nabla r^{-1}=-\\vec{r}/r^2$, integrating it over a unit sphere gives $\\iint \\hat{r}\\cdot \\nabla r^{-1} d^2x=-4\\pi=\\iiint \\nabla^2 r^{-1}d^3x$. So $\\nabla^2 r^{-1}=-4\\pi\\delta(\\vec{r})=-4\\pi\\delta(x)\\delta(y)\\delta(z)$."},
{q:"Solve Laplace's equation in spherical coordinates with azimuthal symmetry. (Just memorize the answer!)", a:"$\\phi(r,\\theta)=\\sum_{i=0}^{\\infty}(A_i r^i+B_i r^{-i-1})P_i(\\cos(\\theta))$"},
//Fundamental Memorization
{q:"List off Maxwell's equations.",a:"$$\\nabla\\cdot E=\\rho/\\varepsilon_0$$ $$\\nabla \\times E=-\\partial_t B$$ $$\\nabla \\cdot B=0$$ $$\\nabla \\times B=\\mu_0 J+\\mu_0 \\varepsilon_0 \\partial_t E$$"},
{q:"How are the electromagnetic vector and scalar potentials related to the electric and magnetic fields?",a:"$$\\vec{E}=-\\nabla \\phi-\\frac{\\partial \\vec{A}}{\\partial t}$$ $$\\vec{B}=\\nabla \\times \\vec{A}$$"},
{q:"What are the relations between $E$ and $D$, and $B$ and $H$? What about in materials with linear susceptibility?",a:"We have $\\vec{D}=\\varepsilon_0 \\vec{E}+\\vec{P}$, and $\\vec{H}=\\frac{1}{\\mu_0}\\vec{B}-\\vec{M}$. Linear polarizability means $P=\\chi_e \\varepsilon_0 \\vec{E}$, so that we can write $\\vec{D}=\\varepsilon_0(1+\\chi_e)\\vec{E}=\\varepsilon\\vec{E}$. Linear magnetizability, is defined a bit differently: $\\vec{M}=\\chi_m \\vec{H}$. So we have $\\mu_0 \\vec{H}+\\mu_0 \\chi_m \\vec{H}=\\mu \\vec{H}=\\vec{B}$, where $\\mu=\\mu_0(1+\\chi_m)$."},
{q:"What is the relationship between magnetic susceptibility $\\chi_m$, magnetic permeability $\\mu$ and the $\\vec{H}$ and $\\vec{B}$ fields in linear media?",a:"$\\mu\\vec{H}=\\vec{B}$ where $\\mu=\\mu_0(1+\\chi_m)$ and $\\vec{M}=\\chi_e \\vec{H}$."},
{q:"What is the relationship between electric susceptibility $\\chi_e$, electric permittivity $\\varepsilon$, and the $\\vec{D}$ and $\\vec{E}$ fields in linear media?",a:"$\\vec{D}=\\varepsilon \\vec{E}$, $\\varepsilon=\\varepsilon_0(1+\\chi_e)$ and further $\\vec{D}=\\chi_e \\vec{E}$."},
{q:"What is the potential of a point electric dipole?",a:"$V(\\vec{r})=\\frac{1}{4\\pi\\varepsilon_0} \\frac{\\vec{p}\\cdot \\vec{r}'}{\\vec{r}'^2}$, where $\\vec{r}'=\\vec{r}-\\vec{r}_0$."},
{q:"A material with polarization $P$ behaves like it has a surface charge and volume charge; what are the formulas for them?",a:"The surface bound charge is $\\sigma_b=\\vec{P}\\cdot\\hat{n}$, and the volume bound charge is $\\rho_b=-\\nabla\\cdot \\vec{P}$. Proof (Griffiths 4.2.1): The potential of a dipole is $V(\\vec{r})=\\frac{\\vec{p}\\cdot\\hat{r}'}{4\\pi\\varepsilon_0 r'^2}$, with $\\vec{r}'=\\vec{r}-\\vec{x}$, $\\vec{x}$ being the position of the source. So the potential of a dipole distribution is $\\int_\\Lambda \\frac{\\vec{P}\\cdot\\hat{r}'}{4\\pi\\varepsilon_0 r'^2} d^3x$, which is equal to $$\\int_\\Lambda d^3 x \\frac{\\vec{P}}{4\\pi\\varepsilon_0}\\cdot \\nabla'\\frac{1}{r'}=\\frac{1}{4\\pi\\varepsilon_0}\\left(\\int_\\Lambda d^3x \\nabla'\\cdot\\left(\\frac{\\vec{P}}{r'}\\right)-\\int_\\Lambda d^3 x \\frac{1}{r'}(\\nabla'\\cdot \\vec{P})\\right)=\\frac{1}{4\\pi\\varepsilon_0}\\left(\\int_{\\partial \\Lambda} \\frac{\\vec{P}}{r'}\\cdot d\\vec{a}-\\int d^3 x \\frac{1}{r'}(\\nabla'\\cdot \\vec{P})\\right)$$ which looks like the sum of a volume charge plus a surface charge."},
{q:"A material with magnetization $M$ behaves like it has a surface current and volume current; what are the formulas for it?",a:"Surface current $\\vec{K}_b=\\vec{M}\\times \\hat{n}$. $\\vec{J}_b=\\nabla\\times\\vec{M}$."},
{q:"What are Maxwell's equations in matter?",a:"$$\\nabla \\cdot \\vec{D}=\\rho_f$$ $$\\nabla \\cdot \\vec{B}=0$$ $$\\nabla \\times \\vec{E}=-\\frac{\\partial \\vec{B}}{\\partial t}$$ $$\\nabla\\times\\vec{H}=\\vec{J}_f+\\frac{\\partial \\vec{D}}{\\partial t}$$"},
{q:"For Maxwell's equations in matter, list the four boundary conditions for the $E$, $D$, $B$, and $H$ in terms of the free charge and free current.",a:"$\\Delta\\vec{E}^\\parallel=\\vec{0}$, $\\Delta \\vec{D}^\\perp=\\sigma_f\\hat{n}$, $\\Delta B^\\perp=0$, $\\Delta \\vec{H}^\\parallel=\\vec{K}_f\\times\\hat{n}$, where the differences are taken as 'out' minus 'in' and $\\hat{n}$ points from 'in' to 'out'."},
{q:"List electric field boundary conditions across a charged surface, and magnetic field boundary conditions across a surface current.",a:"$\\Delta\\vec{E}^\\parallel=\\vec{0}$, $\\Delta \\vec{E}^\\perp=\\sigma/\\varepsilon_0\\hat{n}$, $\\Delta B^\\perp=0$, $\\Delta \\vec{B}^\\parallel=\\mu_0 \\vec{K}\\times\\hat{n}$, where the differences are taken as 'out' minus 'in' and $\\hat{n}$ points from 'in' to 'out'."},
{q:"Write the energy stored in an E-field, a B-field, a potential energy + charge configuration. What is the energy density of the em field?",a:"The energy density is $u=\\frac{\\varepsilon_0}{2}\\|\\vec{E}\\|^2+\\frac{1}{2\\mu_0}\\|\\vec{B}\\|^2$. For a potential+charge configuration (zero $B$ field) the energy density is $\\frac{1}{2} V \\rho$."},
{q:"Define the Poynting vector and the related conservation equation.",a:"The Poynting vector is $\\vec{S}=\\frac{1}{\\mu_0}\\vec{E}\\times \\vec{B}$. If $u$ is the energy density, this satisfies the continuity equation: ${\\frac  {\\partial u}{\\partial t}}=-\\nabla \\cdot {\\mathbf  {S}}-{\\mathbf  {J}}\\cdot {\\mathbf  {E}}$, and hence represents an energy flow."},
//Method of images

//electrostatics in and out of matter
{q:"Find the electric field of a plane of charge. Find the magnetic field of a plane of surface current.",a:"If $\\hat{n}$ points towards the side of the surface you're currently on, then: $\\vec{E}=\\hat{n}\\frac{\\rho}{2\\varepsilon_0}$, $\\vec{B}=\\frac{\\mu_0}{2} \\vec{K}\\times \\hat{n}$."},
{q:"Write the formulas for the charge on a capacitor, the energy in a capacitor, and the current across a capacitor in terms of $V$.",a:"$Q=CV$ (definition), $W=\\frac{1}{2}CV^2=\\frac{Q^2}{2C}$, $I=C\\frac{dV}{dt}$."},
{q:"What is the capacitance of a parallel plate capacitor with or without a dielectric?",a:"If $\\kappa$ is the dielectric constant, $C=\\kappa \\frac{\\varepsilon_0A}{d}=\\frac{\\epsilon A}{d}$."},
{q:"What is the capacitance of a two spherical shell capacitor with or without a dielectric?",a:"$$C=4\\pi\\varepsilon_0 \\kappa \\frac{r_1 r_2}{r_2-r_1}$$ (dielectric constant $\\kappa$)"},
{q:"Write the torque, force on, energy of an electric dipole.",a:"Torque: $\\vec{\\tau}=\\vec{p}\\times \\vec{E}$. Energy: $U=-\\vec{p}\\cdot \\vec{E}$. Force: $\\vec{F}=\\nabla (\\vec{p}\\cdot \\vec{E})=(\\vec{p}\\cdot \\nabla)\\vec{E}$."},
{q:"Find the potential of an electric dipole.",a:"$$V(\\vec{r})=\\frac{1}{4\\pi\\varepsilon_0}\\frac{\\vec{p}\\cdot\\hat{r}}{r^2}$$"},

//Infinite series in electrostatics
{q:"Find the electric dipole moment of a charge configuration.",a:"$\\vec{p}=\\int \\vec{r}\\rho(r)d^3r$"},
//magnetostatics in and out of matter & 
{q:"Find the electric field around a charged wire. Find the magnetic field around a wire with flowing current.",a:" then $\\vec{E}=\\frac{\\lambda}{2\\pi\\varepsilon_0 s} \\hat{s}$ and $\\vec{B}=\\frac{\\mu_0 I}{2\\pi s}\\hat{\\varphi}$. (The wire faces along $\\hat{z}$, $s$ is the distance from the wire, $\\hat{s}$ points radially out from the wire, and $\\hat{\\phi}$ points angularly such that $\\hat{s}\\times \\hat{\\phi}=\\hat{z}$. Ie, s, phi, z form an orthonormal right-handed coordinate system.)"},
{q:"Write out the Biot-Savart law",a:"$$\\vec{B}(\\vec{r})=\\frac{\\mu_0}{4\\pi}\\int \\frac{I d\\vec{\\ell}\\times \\vec{r}'}{\\|\\vec{r}'\\|^3}$$"},
{q:"Find the magnetic field in a solenoid and the inductance of a solenoid.",a:"With $N$ turns on a coil of length $\\ell$, current $I$, and cross-sectional area $A$: $$\\vec{B}=\\frac{\\mu_0 N I}{\\ell}$$ $$L=\\frac{\\mu_0 N^2 A}{\\ell}$$"},
{q:"Find the magnetic field in a toroid.",a:"$B=\\frac{\\mu_0 N I}{2\\pi s}$, $s$ being the distance from the axis of the toroid."},

//infinite magnetostatic series

//Current/dynamics/dynamos
{q:"What is the EMF around a loop enclosing a uniform changing magnetic field?",a:"${\\mathcal {E}}=-{\\frac {\\partial \\Phi }{\\partial t}}$ (Lenz's Law)"},

//Conservation laws
{q:"What is the momentum density of the electrodynamic field?",a:"$\\mu_0 \\varepsilon_0 \\vec{S}=\\varepsilon_0\\vec{E}\\times\\vec{B}$."},


//Waves and waveguides and waves
{q:"Write the formula for an EM wave in terms of E",a:"In complex notation, where $\\omega/k=c$, $$\\vec{E}=\\vec{E}_0 e^{i(\\vec{k}\\cdot \\vec{r}-\\omega t)}$$ $$\\vec{B}=\\frac{1}{c} \\hat{k}\\times \\vec{E}$$"},
{q:"Write the average intensity of an EM wave in terms of the electric field amplitude $E$.",a:"$I=\\langle S\\rangle=\\frac{1}{2}c\\varepsilon_0 E^2$"},

//Gauges and green's functions

//Radiation and algebra.
{q:"Write the Larmor formula for the power radiated by an accelerating point charge - at least write the factors of $q$ and $a$.",a:"$P=\\frac{\\mu_0 q^2 a^2}{6\\pi c}$"},
{q:"For an oscillating electric dipole, write out the formula for the total radiated power. Don't worry about unitless constants, just get the dependence on frequency and dipole moment correct, and if needed use unit analysis to throw in the correct fundamental constants. What is the dependence of intensity on angle? How does intensity change with radius?",a:"Electric dipole $\\vec{p}=p_0 \\sin(\\omega t)\\hat{z}$. The intensity varies like $\\sin^2(\\theta)$, so no radiation travels along the $\\hat{z}$ axis. The waves radiate to infinity, so they go down like $\\frac{1}{r^2}$. The total power radiated is: $$P=\\frac{\\mu_0 p_0^2 \\omega^4}{12 \\pi c}$$"},
{q:"For an oscillating magnetic dipole, write out the formula for the total radiated power. Don't worry about unitless constants, just get the dependence on frequency and magnetic moment correct, and if needed use unit analysis to throw in the correct fundamental constants. What is the dependence of intensity on angle? How does intensity change with radius? Is the radiated power generally larger or smaller than electric dipole radiation?",a:"Magnetic dipole $\\vec{m}=m_0 \\sin(\\omega t)\\hat{z}$. The intensity varies with $\\sin^2(\\theta)$ (no radiation travels along the $\\hat{z}$ axis). The waves radiate to infinity, so the intensity goes down like $\\frac{1}{r^2}$. The total power radiated is: $$P=\\frac{\\mu_0 m_0^2 \\omega^4}{12 \\pi c^3}$$"},


//Radiation and scattering

    ];    

