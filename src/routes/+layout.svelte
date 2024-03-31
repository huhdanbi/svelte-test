<script>
    import '$lib/style/common.css';

    import Header from '$lib/components/layouts/Header.svelte';
</script>

<Header/>
<div id="contents" class="bg-gray-100">
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-none">
            <div class="overflow-hidden bg-white shadow sm:rounded-lg px-4 py-4 sm:px-6">
                <slot></slot>
            </div>
        </div>
    </div>
</div>