import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import moment from "moment";
import Event from "./pages/Event"


moment.defineLocale('pt-br', {
  months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
  monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
  weekdays : 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
  weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
  weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_')
});

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r0wwcu0g7301z35zrhgpvy/master',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Event />
      </ApolloProvider>
    </div>
  )
}

export default App
