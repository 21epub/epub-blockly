export const logic = {
  kind: 'CATEGORY',
  contents: [
    {
      kind: 'BLOCK',
      type: 'controls_if',
    },
    {
      kind: 'BLOCK',
      type: 'logic_compare',
    },
    {
      kind: 'BLOCK',
      type: 'logic_operation',
    },
    {
      kind: 'BLOCK',
      type: 'logic_negate',
    },
    {
      kind: 'BLOCK',
      type: 'logic_boolean',
    },
    {
      kind: 'BLOCK',
      type: 'logic_null',
    },
    // {
    //   kind: 'BLOCK',
    //   blockxml: '<block type="logic_ternary"></block>',
    //   type: 'logic_ternary',
    // },
    // {
    //   kind: 'BLOCK',
    //   type: 'util_wait',
    // },
  ],
  id: 'catLogic',
  colour: '210',
  name: '逻辑',
};

export const loop = {
  kind: 'CATEGORY',
  contents: [
    {
      kind: 'BLOCK',
      type: 'controls_repeat_ext',
    },
    {
      kind: 'BLOCK',
      type: 'controls_whileUntil',
    },
    {
      kind: 'BLOCK',
      type: 'controls_for',
    },
    {
      kind: 'BLOCK',
      type: 'controls_forEach',
    },
    {
      kind: 'BLOCK',
      type: 'controls_flow_statements',
    },
  ],
  id: 'catLoops',
  colour: '120',
  name: '循环',
};

export const math = {
  kind: 'CATEGORY',
  contents: [
    {
      kind: 'BLOCK',
      type: 'math_number',
    },
    {
      kind: 'BLOCK',
      type: 'math_arithmetic',
    },
    {
      kind: 'BLOCK',
      type: 'math_single',
    },
    {
      kind: 'BLOCK',
      type: 'math_trig',
    },
    {
      kind: 'BLOCK',
      type: 'math_constant',
    },
    {
      kind: 'BLOCK',
      type: 'math_number_property',
    },
    {
      kind: 'BLOCK',
      type: 'math_round',
    },
    {
      kind: 'BLOCK',
      type: 'math_on_list',
    },
    {
      kind: 'BLOCK',
      type: 'math_modulo',
    },
    {
      kind: 'BLOCK',
      type: 'math_constrain',
    },
    {
      kind: 'BLOCK',
      type: 'math_random_int',
    },
    {
      kind: 'BLOCK',
      type: 'math_random_float',
    },
  ],
  id: 'catMath',
  colour: '230',
  name: '运算',
};

export const text = {
  kind: 'CATEGORY',
  contents: [
    {
      kind: 'BLOCK',
      type: 'text',
    },
    {
      kind: 'BLOCK',
      type: 'text_join',
    },
    {
      kind: 'BLOCK',
      type: 'text_append',
    },
    {
      kind: 'BLOCK',
      type: 'text_length',
    },
    {
      kind: 'BLOCK',
      type: 'text_isEmpty',
    },
    {
      kind: 'BLOCK',
      type: 'text_indexOf',
    },
    {
      kind: 'BLOCK',
      type: 'text_charAt',
    },
    {
      kind: 'BLOCK',
      type: 'text_getSubstring',
    },
    {
      kind: 'BLOCK',
      type: 'text_changeCase',
    },
    {
      kind: 'BLOCK',
      type: 'text_trim',
    },
    {
      kind: 'BLOCK',
      type: 'text_print',
    },
    {
      kind: 'BLOCK',
      type: 'text_prompt_ext',
    },
  ],
  id: 'catText',
  colour: '160',
  name: '文本',
};
export const list = {
  kind: 'CATEGORY',
  contents: [
    {
      kind: 'BLOCK',
      type: 'lists_create_with',
    },
    {
      kind: 'BLOCK',
      type: 'lists_repeat',
    },
    {
      kind: 'BLOCK',
      type: 'lists_length',
    },
    {
      kind: 'BLOCK',
      type: 'lists_isEmpty',
    },
    {
      kind: 'BLOCK',
      type: 'lists_indexOf',
    },
    {
      kind: 'BLOCK',
      type: 'lists_getIndex',
    },
    {
      kind: 'BLOCK',
      type: 'lists_setIndex',
    },
    {
      kind: 'BLOCK',
      type: 'lists_getSublist',
    },
    {
      kind: 'BLOCK',
      type: 'lists_split',
    },
    {
      kind: 'BLOCK',
      type: 'lists_sort',
    },
  ],
  id: 'catLists',
  colour: '260',
  name: '列表',
};

export const color = {
  kind: 'CATEGORY',
  contents: [
    {
      kind: 'BLOCK',
      type: 'colour_picker',
    },
    {
      kind: 'BLOCK',
      type: 'colour_random',
    },
    {
      kind: 'BLOCK',
      type: 'colour_rgb',
    },
    {
      kind: 'BLOCK',
      type: 'colour_blend',
    },
  ],
  id: 'catColour',
  colour: '20',
  name: '颜色',
};
