<script>
    import "../app.css";
    import agiologo from "$lib/images/agiogpt2.png";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

</script>


<Navbar dir="ltr" class="fixed shadow-lg bg-black">
    <NavBrand href="/">
      <img src={agiologo} class="me-3 h-12 invert-0" alt="AGIOGPT Logo" />
      <span class="self-center whitespace-nowrap text-xl font-extrabold text-white">AGIO GPT <span class="font-medium">Tunisia</span> </span>
    </NavBrand>
    <NavHamburger menuClass="text-white hover:text-black"  />
    <NavUl dir="rtl" >
      <NavLi href="/" class="font-bold md:text-white">Home</NavLi>
      <NavLi href="/about" class="font-bold md:text-white">About</NavLi>
      <NavLi href="/pricing" class="font-bold md:text-white">Pricing</NavLi>
      <NavLi href="/contact" class="font-bold md:text-white">Contact</NavLi>
    </NavUl>
  </Navbar>


<slot></slot>
