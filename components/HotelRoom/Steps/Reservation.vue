<template>
    <form class="reservation">
        <div class="reservation-block">
            <h3 class="reservation-block__title">Бронирование отеля</h3>
            <ui-select
                :title="'Отель'"
                :select-data="[ {text: 'Дыбенко'} ]"
            />
            <div class="reservation-block__room">
                <div class="reservation-block__room-top">
                    <p>
						Тип номера
					</p>
                    <span @click="selectAllRooms" >
						Выбрать все
					</span>
                </div>
                <div class="reservation-block__room-btns">
                    <div
                        :key="room"
                        v-for="room in data?.rooms"
                        class="reservation-block__room-btns__item"
                    >
                        <span>
							{{ room?.name }}
						</span>
                        <ui-radio
                            :value="room?.id"
							:checked="form.room.includes(room?.id)"
                            @update:value="updateRoomSelection(room?.id)"
                        />
                    </div>
                </div>
                {{ form.room }}
            </div>
        </div>
    </form>
</template>

<script setup>
// Imports
import api                     from '@/api/index.js'
import { required, minLength } from '@vuelidate/validators';
import { useVuelidate }        from '@vuelidate/core';

// defineOptions
defineOptions({
    name: 'Выбор отеля'
})

// Func
const updateRoomSelection = (roomId) => {
    const index = form.room.indexOf(roomId);

	index === -1? form.room.push(roomId) : form.room.splice(index, 1)
};

const selectAllRooms = () => {
    if (form.room.length === data.value.rooms.length)
        form.room = [];
    else
        form.room = data.value.rooms.map(room => room.id);
};

// Form
const form = reactive({
	room  : [],
});

const rules = {
	room  : {  },
};

const v$ = useVuelidate(rules, form);

// Fetch
const data = ref({});

const fetchTest = async () => {

    await api.hotel.reservation(
        {
            "action":"start",
            "ext_client_info":"Пришлите что нить",
            "auth":
            {
                "login":"guest","pass":""
            },
            "app_token":"9EFD4B81-DDEA-4805-A221-49E37E2AD387"
        })
        .then(async (res) => {
            data.value.rooms = res?.lists?.room_cats
            console.log(res);
        });
};

onMounted( ()=> fetchTest())
</script>

<style lang="scss">
.reservation-block
{
    padding: 40px 30px 30px 30px;
    background-color: $black;
    border-radius: 24px;
}

.reservation-block__title
{
    font-size: 38px;
    line-height: 42.94px;
    letter-spacing: -0.05em;
    text-align: center;
    color: white;
    margin-bottom: 30px;
}

.reservation-block__room { margin-top: 35px }

.reservation-block__room-top
{
    display: flex;
    justify-content: space-between;
    align-items: end;
    p
    {
        font-size: 24px;
        font-weight: 400;
        line-height: 22.97px;
        letter-spacing: -0.05em;
        color: white;
    }

    span
    {
        font-size: 16px;
        font-weight: 400;
        line-height: 15.31px;
        letter-spacing: -0.03em;
        color: $orange;
        user-select: none;
        cursor: pointer
    }
}

.reservation-block__room-btns
{
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin-top: 15px;
}


.reservation-block__room-btns__item
{
    display: flex;
    flex-direction: column-reverse;
    gap: 27px;
    width: 100%;
    max-width: 140px;
    padding: 16px;
    background-color: #282828;
    box-sizing: border-box;
    border: 2px solid #282828;
    border-radius: 14px;

    span
    {

        font-size: 18px;
        font-weight: 400;
        line-height: 17.23px;
        letter-spacing: -0.03em;
        color: white;
    }

    &:has(.ui-radio.active) { animation: draw-border 2s forwards }

	// &:not(:has(.ui-radio.active)) { animation: draw-border-reverse 1s forwards }

}

@keyframes draw-border
{
    0%
	{
		transform-origin: left;
        border-bottom: 2px solid $orange;
    }
	50%
	{
		transform-origin: bottom;
		border-left: 2px solid $orange;
		border-right: 2px solid $orange;
		border-bottom: 2px solid $orange;
	}
	100%
	{
		transform-origin: center;
		border-left: 2px solid $orange;
		border-right: 2px solid $orange;
		border-bottom: 2px solid $orange;
		border-top: 2px solid $orange;
    }
}

@keyframes draw-border-reverse
{
    0%
	{
        transform-origin: center;
        border-left: 2px solid $orange;
        border-right: 2px solid $orange;
        border-bottom: 2px solid $orange;
        border-top: 2px solid $orange;
    }
    50%
	{
        transform-origin: bottom;
        border-left: 2px solid $orange;
        border-right: 2px solid $orange;
        border-bottom: 2px solid $orange;
    }
    100%
	{
        transform-origin: left;
        border-bottom: 2px solid #282828;
        border-left: 2px solid #282828;
        border-right: 2px solid #282828;
        border-top: 2px solid #282828;
    }
}
</style>