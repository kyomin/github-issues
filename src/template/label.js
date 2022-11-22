import LabelStore from '../store/labelStore';

export function getLabelTpl() {
  /* html */
  return `
  <div id="label-wrapper" class="w-9/12 m-auto min-w-min">

  <div id="header" class="flex justify-between">

    <div class="filter-menu w-2/3 px-3 py-1 flex base-outer items-center">
      <form action="/" class="p-1 w-full">
        <input type="text" class="w-full bg-slate-100 focus:outline-none" name="filter-text" id="filter-input"
          placeholder="search all filter...">
      </form>
    </div>

    <div id="newLabelButton" class="new-label-button cursor-pointer p-1 py-1 base-outer flex items-center justify-center w-2/12 ml-4 bg-green-700 text-white">
      <a href="javascript:void(0);">New label</a>
    </div>
  </div>

  <div id="labelFormWrapper" class="hidden"></div>

  <div id="labels-wrapper" class="m-auto  base-outer mt-6 bg-slate-100">
    <div class="label-header h-16 flex justify-between items-center border-b">

      <div class="mr-3 d-none pl-4">
        <div id="labelCount" class="whitespace-nowrap open-count font-bold cursor-pointer">${
          LabelStore.getState().labelList.length
        } Labels</div>
      </div>

      <div class="details-list flex ml-auto">
        <details>
          <summary>Sort</summary>
        </details>
      </div>

    </div>
    <ul class="label-list ml-auto text-sm bg-white">

    </ul>
  </div>
    <button id="labelUpdateButton" class="refresh-labels base-outer p-2 mt-2 float-right">update labels</button>
</div>
  `;
}

export function getLabelFormTpl() {
  /* html */
  return `
  <form id="labelInputForm" class="p-3 mb-3 mt-6 border rounded-sm font-bold" id="new-label-form" action="/labels" accept-charset="UTF-8" method="post">
  <div class="form-group mt-0 mb-2"
    data-url-template="/labels/preview/" data-default-name="Label preview">

    <span id="label-preview" class="rounded-lg border bg-pink-700 p-2 px-3 mt-2 inline-block">
      Label preview
    </span>
  </div>

  <div id="label-input-wrapper" class="flex justify-between items-start mb-2">

    <!--new label name-->
    <dl
      class="form-group my-2">
      <dt class=" flex justify-between items-center">
        <label for="label-name-input" class="f5">Label name</label>
        <span class="text-sm " data-suffix="remaining" role="none" hidden="">
          50 remaining
        </span>
      </dt>
      <dd class="relative mt-2">
        <text-expander keys=":" data-emoji-url="/autocomplete/emoji?use_colon_emoji=true">
          <input type="text" data-maxlength="50" autocomplete="off" required="" pattern="^(?!(\.|\.\.)$).*$"
            id="label-name-input" name="label[name]"
            class="w-full p-2 base-outer focus:outline-none" placeholder="Label name" value="" >
        </text-expander>
      </dd>
      <dd class="" hidden="" id="label--name-error"></dd>
    </dl>
    <!--END new label name-->

    <!--new label description-->
    <dl
      class="form-group my-2">
      <dt class="flex justify-between items-center ">
        <label for="label-description-input" class="f5">Description</label>
        <span class="text-sm" data-suffix="remaining"
          role="none" hidden="">
          100 remaining
        </span>
      </dt>
      <dd class="mt-2">
        <input type="text" id="label-description-input" name="label[description]"
          class="w-full p-2 base-outer focus:outline-none"
          placeholder="Description" value="" 
          maxlength="100">
      </dd>
      <dd class="" hidden="" id="label--description-error"></dd>
    </dl>
    <!--END new label description-->

    <!--new label color-->
    <dl class="form-group my-2">
      <dt>
        <label class="f5">Color</label>
      </dt>
      <dd class="mt-2 flex">

        <button id="new-label-color" type="button"
          data-view-component="true"
          class="rounded-md border px-1 bg-pink-700 font-bold text-4xl"
          aria-labelledby="tooltip-1664858299420-7732">
          ⟳
        </button>
        <tool-tip for="new-label-color" data-direction="s" data-type="label" data-view-component="true"
          class="sr-only position-absolute" id="tooltip-1664858299420-7732" aria-hidden="true" role="tooltip">Get
          a new color</tool-tip>
        <div class="ml-2">
          <input type="text" id="label-color-value" name="label-color[description]"
          class="w-full p-2 base-outer focus:outline-none"
          placeholder="#color" value="" maxlength="100" disabled>
        </div>
      </dd>
    </dl>
    <!--END new label color-->

    <!--new label actions-->
    <div
      class="form-group my-2 flex mt-10">
      <button id="label-cancel-button" type="button" class="base-outer p-2 mr-4"> Cancel
      </button>
      <button id="label-create-button" type="submit" class="base-outer p-2 mr-4 bg-green-700 opacity-50 text-white" disabled> Create label
      </button>
    </div>
    <!--END new label actions-->
  </div>
  </form>
  `;
}

export function getLabelItemTpl({ name, color, description }) {
  return `
            <li class="label-item flex items-center ml-4 py-3 justify-between border-b ">
                <div class="issue-title flex"> 
                    <span class="rounded-lg border p-1 px-2" style="background-color:#${color}">${name}</span> 
                </div>
                <div class="issue-description ">${description}</div>
                <div class="issue-description ">3 issues </div>
                <div class="label-editor pr-4 ">
                    <button class="edit-button mx-2 ">edit</button>
                    <button class="delete-button">delete</button>
                </div>
            </li>
        `;
}
