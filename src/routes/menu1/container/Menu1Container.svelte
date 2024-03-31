<script>
	import { onMount } from 'svelte';
    import { getTestList } from '$lib/api/menu1/menu1';

    import MenuList from '../components/MenuList.svelte'

    let menuList = [];
    onMount( async () => {
        await getTestList().then(res => {
            console.log(res);
            menuList = res;
        });
    });
</script>

<MenuList menuList={menuList} />

