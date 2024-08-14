<script>
    import "../app.css";
    import flogo from "$lib/images/agiogpt.png";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

</script>


<Navbar dir="ltr" class="fixed shadow-lg">
    <NavBrand href="/">
      <img src={flogo} class="me-3 h-12" alt="Flowbite Logo" />
      <span class="self-center whitespace-nowrap text-xl font-extrabold dark:text-white">AGIO GPT <span class="font-medium">Tunisia</span> </span>
    </NavBrand>
    <NavHamburger  />
    <NavUl dir="rtl">
      <NavLi href="/" class="font-bold">Home</NavLi>
      <NavLi href="/about" class="font-bold">About</NavLi>
      <NavLi href="/pricing" class="font-bold">Pricing</NavLi>
      <NavLi href="/contact" class="font-bold">Contact</NavLi>
    </NavUl>
  </Navbar>


<slot></slot>
