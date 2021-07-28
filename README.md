# Git crypt template
---
```
 @@@@@@@@  @@@  @@@@@@@      @@@@@@@  @@@@@@@   @@@ @@@  @@@@@@@   @@@@@@@     @@@@@@@  @@@@@@@@  @@@@@@@@@@   @@@@@@@   @@@        @@@@@@   @@@@@@@  @@@@@@@@  
@@@@@@@@@  @@@  @@@@@@@     @@@@@@@@  @@@@@@@@  @@@ @@@  @@@@@@@@  @@@@@@@     @@@@@@@  @@@@@@@@  @@@@@@@@@@@  @@@@@@@@  @@@       @@@@@@@@  @@@@@@@  @@@@@@@@  
!@@        @@!    @@!       !@@       @@!  @@@  @@! !@@  @@!  @@@    @@!         @@!    @@!       @@! @@! @@!  @@!  @@@  @@!       @@!  @@@    @@!    @@!       
!@!        !@!    !@!       !@!       !@!  @!@  !@! @!!  !@!  @!@    !@!         !@!    !@!       !@! !@! !@!  !@!  @!@  !@!       !@!  @!@    !@!    !@!       
!@! @!@!@  !!@    @!!       !@!       @!@!!@!    !@!@!   @!@@!@!     @!!         @!!    @!!!:!    @!! !!@ @!@  @!@@!@!   @!!       @!@!@!@!    @!!    @!!!:!    
!!! !!@!!  !!!    !!!       !!!       !!@!@!      @!!!   !!@!!!      !!!         !!!    !!!!!:    !@!   ! !@!  !!@!!!    !!!       !!!@!!!!    !!!    !!!!!:    
:!!   !!:  !!:    !!:       :!!       !!: :!!     !!:    !!:         !!:         !!:    !!:       !!:     !!:  !!:       !!:       !!:  !!!    !!:    !!:       
:!:   !::  :!:    :!:       :!:       :!:  !:!    :!:    :!:         :!:         :!:    :!:       :!:     :!:  :!:        :!:      :!:  !:!    :!:    :!:       
 ::: ::::   ::     ::        ::: :::  ::   :::     ::     ::          ::          ::     :: ::::  :::     ::    ::        :: ::::  ::   :::     ::     :: ::::  
 :: :: :   :       :         :: :: :   :   : :     :      :           :           :     : :: ::    :      :     :        : :: : :   :   : :     :     : :: ::   
                                                                                                                                                                                                                                                                                        
```

## Motivation
As a lot of projects sometimes contains sensitive tokens, password etc. - we can't always rely on the developers to keep things in order.

Therefore, this is a easy enough to reference template to get the broad idea of how and when to use git-crypt.


## Preparation
1. Install GPG and generate a key locally
 ```bash
 brew install gpg pinentry-mac
 ```

2. Just to be on the safe side, let's check if you already have any GPG key. 
```bash
gpg --list-keys
```
If you do have something here, jump to step 4.

3. Time to generate
```bash
gpg --gen-key 
```

And now when you'll run `gpg --list-keys` you will get output something like this
```bash
/Users/Gilad/.gnupg/pubring.kbx
-------------------------------
pub   ed25519 2021-07-28 [SC] [expires: 2023-07-28]
      F69D75E3E3AC97A9D5A52C4DCCBB5D871565FE10
uid           [ultimate] Gilad Maoz <gilad@maoz.dev>
sub   cv25519 2021-07-28 [E] [expires: 2023-07-28]
```

You need to get the public key which is a hexadecimal string. In this case it is `F69D75E3E3AC97A9D5A52C4DCCBB5D871565FE10`

4. Add a key to a project
```bash
git-crypt add-gpg-user <same-hexa-from-before>
```

5. Export your public key for later usage
```bash
gpg --armor --export --output ~/mykey.gpg
``` 
> In case of a shared public key, you should generate a key locally, and export the **private**
> Or instead of doing all of that - just execute `./install.sh`.

! We should sign eachother keys to make them stronger!
