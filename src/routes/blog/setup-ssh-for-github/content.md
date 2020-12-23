

<h2 id="check-if-open-ssh-is-running">Check if OpenSSH service is running</h2>
On Windows 10 is the Service <strong><Underscore content="OpenSSH"/></strong> disabled by default. Right click the service, open settings and enable the service. Now you can start the service.

<br><br>
<Image imageName="services-openssh-min.png" alt="services-openssh-min" desc="Windows Service OpenSSH" {imageProps} />
<br>

<h2 id="check-if-ssh-key-exists">Check if SSH key exists</h2>
By default, SSH keys will be stored in the directorey: <strong><Underscore content="C:\Users\%username%\.ssh"/></strong> .
Alternativly, you can check it, with this command.

<PrismJS language="bash" code="{codeSnippets.checkSshKeys}" header=""/>
You should find one of these files:

- id_rsa.pub
- id_ecdsa.pub
- id_ed25519.pub

<h2 id="create-a-new-ssh-key">Create a new SSH key</h2>
<PrismJS language="bash" code="{codeSnippets.newSshKey}" header=""/>






<script>
    export let imageProps={
        width:"80%",
        height: "auto",
        objectFit: "cover"
    }
    import Underscore from "../../../components/Underscore.svelte";
    import PrismJS from "../../../components/PrismJS.svelte";
    import codeSnippets from '../../../components/codeSnippets.js';
    import Image from "../../../components/Image.svelte";
</script>


