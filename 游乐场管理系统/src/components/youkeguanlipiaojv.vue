<template>
    <div class="ticket-management">
      <h2>票务管理</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>类型</th>
            <th>价格</th>
            <th>有效期</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in tickets" :key="ticket.id">
            <td>{{ ticket.id }}</td>
            <td>{{ ticket.type }}</td>
            <td>{{ ticket.price }}</td>
            <td>{{ ticket.validityPeriod }}</td>
            <td>
              <button @click="editTicket(ticket)">编辑</button>
              <button @click="deleteTicket(ticket.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="showAddForm = true">添加票种</button>
      <div v-if="showAddForm">
        <h3>添加票种</h3>
        <form @submit.prevent="addTicket">
          <input v-model="newTicket.type" placeholder="类型" required>
          <input v-model="newTicket.price" type="number" step="0.01" placeholder="价格" required>
          <input v-model="newTicket.validityPeriod" placeholder="有效期" required>
          <button type="submit">提交</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  export default {
    name: 'TicketManagement',
    setup() {
      const tickets = ref([])
      const showAddForm = ref(false)
      const newTicket = ref({ type: '', price: null, validityPeriod: '' })
  
      const fetchTickets = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/tickets')
          tickets.value = response.data
        } catch (error) {
          console.error('Error fetching tickets:', error)
        }
      }
  
      const addTicket = async () => {
        try {
          await axios.post('http://localhost:8080/api/tickets', newTicket.value)
          await fetchTickets()
          newTicket.value = { type: '', price: null, validityPeriod: '' }
          showAddForm.value = false
        } catch (error) {
          console.error('Error adding ticket:', error)
        }
      }
  
      const editTicket = (ticket) => {
        // 实现编辑功能
        console.log('Edit ticket:', ticket)
      }
  
      const deleteTicket = async (id) => {
        try {
          await axios.delete(`http://localhost:8080/api/tickets/${id}`)
          await fetchTickets()
        } catch (error) {
          console.error('Error deleting ticket:', error)
        }
      }
  
      onMounted(fetchTickets)
  
      return {
        tickets,
        showAddForm,
        newTicket,
        addTicket,
        editTicket,
        deleteTicket
      }
    }
  }
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    margin: 5px;
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  form {
    margin-top: 20px;
  }
  
  input {
    margin: 5px;
    padding: 5px;
  }
  </style>