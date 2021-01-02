
<h2 id="check-if-open-ssh-is-running">1. Check if OpenSSH service is running</h2>
<strong><Underscore content="OpenSSH"/></strong> is disabled by default on Windows10. Open the Windows-Services and search for <strong><Underscore content="OpenSSH"/></strong>. Click right on the service, open settings start the service. For startup type choose "Automatic".

<br><br>
<div style="display: flex; flex-direction:row; width:100% ; height:auto;">
<Image imageName="services-openssh-min.png" alt="services-openssh" desc="Windows Service OpenSSH" imageProps ='{{ width:"300px", height: "300px", objectFit: "cover", borderRadius:"10px", position:"center", figureWith:"100%"}}' />
<Image imageName="properties-open-ssh.min.png" alt="proprties-openssh" desc="Service OpenSSH Properties" imageProps="{{width:'300px', height:'300px' ,objectFit: 'cover', borderRadius:'10px', position:'center', figureWith:'100%'}}" />
</div>

<br>

<h2 id="check-if-ssh-key-exists">2. Check if SSH key exists</h2>
By default, SSH keys will be stored in the directorey: <strong><Underscore content="C:\Users\%username%\.ssh"/></strong> .
Alternativly, you can check it, with this command.

<PrismJS language="bash" code="{codeSnippets.checkSshKeys}" header=""/>
If you find one of the following files, you can skip step 3.

- id_rsa.pub
- id_ecdsa.pub
- id_ed25519.pub

<h2 id="create-a-new-ssh-key">3. Create a new SSH key</h2>
<PrismJS language="bash" code="{codeSnippets.newSshKey}" header=""/>







<script>
    import Underscore from "../../../components/Underscore.svelte";
    import PrismJS from "../../../components/PrismJS.svelte";
    import codeSnippets from '../../../components/codeSnippets.js';
    import Image from "../../../components/Image.svelte";
</script>


