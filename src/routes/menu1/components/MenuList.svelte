<script>
	export let menuList = [];
</script>

<ul role="list" class="divide-y divide-gray-200 ">
    {#each menuList as item, i (i)}
	<li>
		<a href="#" class="block hover:bg-gray-50">
			<div class="px-4 py-4 sm:px-6">
				<div class="flex items-center justify-between">
					<div class="truncate text-sm font-medium text-indigo-600">{item.title}</div>
					<div class="ml-2 flex flex-shrink-0">
						<span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        	user id : TEST{item.id}
                        </span>
					</div>
				</div>
				<div class="mt-2 flex justify-between">
					<div class="sm:flex">
                        {item.body}
					</div>
				</div>
			</div>
		</a>
	</li>
    {/each}
</ul>
