/* eslint-disable no-undef */
const todoList=require('../todo')
let today = new Date().toLocaleDateString("en-CA")

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList()


describe("TodoList Test Suite",()=>{
    beforeAll(()=>{
        add(
            {
                title:"Test Case",
                completed:false,
                dueDate: new Date().toLocaleDateString("en-CA")
    
            })
        
    })
    
    test("to add new todo",()=>{
        const Todoitemscount=all.length
        add(
        {
            title:"Test Case",
            completed:false,
            dueDate: new Date().toLocaleDateString("en-CA")

        })
        expect(all.length).toBe(Todoitemscount+1)
    })
    test("markAsComplete test case",()=>{
        expect(all[0].completed).toBe(false)
        markAsComplete(0)
        expect(all[0].completed).toBe(true)
    })

    test("todos that are over due", () => {
        let overdues= overdue()
        expect(overdues.every((todos) => {
            return todos.dueDate < today})).toBe(true)
      })
    
      test("todos that are due today", () => {
        let duetoday = dueToday()
        expect(duetoday.every((todos) => {
            return todos.dueDate === today})).toBe(true)
      })
    
      test("todos that are due later", () => {
        let duelater = dueLater()
        expect(duelater.every((todos) => {
         return todos.dueDate > today})).toBe(true)
      })
})