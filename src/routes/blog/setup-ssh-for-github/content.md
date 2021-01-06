
<h2 id="check-if-open-ssh-is-running">1. Check if OpenSSH service is running</h2>

**`OpenSSH`** is disabled by default on Windows10. Open the Windows-Services and search for **`OpenSSH`**. Click right on the service, open settings start the service. For startup type choose "Automatic".

<div class="image-container">
    <div class="image-margin">
        <Image 
            imageName="services-openssh-min.png" 
            alt="services-openssh" 
            desc="Windows Service OpenSSH" 
            imageProps ='{{ width:"300px", height: "300px", objectFit: "cover", borderRadius:"10px", position:"center", figureWith:"auto"}}' />
    </div>
   <div class="image-margin">
        <Image 
            imageName="properties-open-ssh.min.png" 
            alt="proprties-openssh" 
            desc="Service OpenSSH Properties" 
            imageProps="{{width:'300px', height:'300px' ,objectFit: 'cover', borderRadius:'10px', position:'center', figureWith:'auto'}}" />
    </div>
</div>

<h2 id="check-if-ssh-key-exists">2. Check if SSH key exists</h2>

By default, SSH keys will be stored in the directorey: ***`C:\Users\%username%\.ssh`***.
Alternativly, you can check it, with this command.

<PrismJS language="bash" code="{codeSnippets.checkSshKeys}" header=""/>
If you find one of the following files, you can skip step 3.

> ✔️ id_rsa.pub  
> ✔️ id_ecdsa.pub  
> ✔️ id_ed25519.pub  

<h2 id="create-a-new-ssh-key">3. Create a new SSH key</h2>

<PrismJS language="bash" code="{codeSnippets.newSshKey}" header=""/>
 
<h2 id="add-the-ssh-key-to-your-github">4. Add the SSH-Key to your Github</h2>

Open the **`id_ed25519.pub`** file and copy the public key into your clipboard.
Open your Github page, click on your profile picture, then click **<Underscore>[`Settings`](https://github.com/settings/profile)</Underscore>**


<script>
    import Underscore from "../../../components/Underscore.svelte";
    import PrismJS from "../../../components/PrismJS.svelte";
    import codeSnippets from '../../../components/codeSnippets.js';
    import Image from "../../../components/Image.svelte";
    import AnchorLink from "../../../components/AnchorLink.svelte";
</script>


