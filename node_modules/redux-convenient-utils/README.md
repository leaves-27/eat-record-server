
# 安装

  npm install redux-convenient-utils --save

# 用法

  该包主要暴露了两个方法，一个用来创建redux的reducer，一个用来创建redux里面的action常量。具体如下：

      createReducer(initialState, reducerMap)：  
        initialState： <object> redux中的state。例如：
          {
                visibilityFilter: 'SHOW_ALL',
                todos: [
                  {
                    text: 'Consider using Redux',
                    completed: true,
                  },
                  {
                    text: 'Keep all state in a single tree',
                    completed: false
                  }
                ]
              }
        reducerMap：<object>集合action及其处理函数的映射关系的一个对象。例如：
        {
          [ActionTypes.ADD_TODO](state, action) {
            let text = action.text.trim();
            return [...state, text];
          }
        } 

      createConstants(...constants)： 
        constants：一个个常量。例如：“SET_STATE”、“MODIFY_STATE”
