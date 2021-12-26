export default {
    template: `
        <header class="app-header ">
            <div class="haeder-container main-layout ">
                <h3 class="logo">Appsus</h3>
                <div class="main-haeder">
                    <nav>
                        <router-link  to="/">Home</router-link> |
                        <router-link  to="/book">Books</router-link> |
                        <router-link  to="/mail">mail</router-link> |
                        <router-link  to="/keep">keep</router-link> 
                    </nav>
                </div>
            </div>
        </header>
    `,
}