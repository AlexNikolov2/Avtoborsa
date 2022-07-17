import React from 'react';
import './Header.css'

export const Header = () => {
    return(
        <header className="">
            <section className="logo">
                <h1>Avtoborsa</h1>
            </section>
            <ul>
                <li><a href="/"><i class="fa-solid fa-house"></i>Home</a></li>
                <li><a href="/"><i class="fa-solid fa-right-to-bracket"></i>Login</a></li>
                <li><a href="/"><i class="fa-solid fa-user-plus"></i>Sign up</a></li>
                {//<li><a href="/"><i class="fa-solid fa-square-plus"></i>Create</a></li>
}
                {//<li><a href="/"><i class="fa-solid fa-address-card"></i>Profile</a></li>
}
                {//<li><a href="/"><i class="fa-solid fa-right-from-bracket"></i>Log out</a></li>
}
                <li><a href="/"><i class="fa-solid fa-magnifying-glass"></i>Search</a></li>
            </ul>
        </header>
    )
}