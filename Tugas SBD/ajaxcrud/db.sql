--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

-- Started on 2021-06-08 21:03:45 PDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'ISO_8859_8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16385)
-- Name: tbl_movie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_movie (
    id integer NOT NULL,
    judul character varying(500),
    sutradara character varying(250),
    aktor character varying(250),
    tahun character varying(5)
);


ALTER TABLE public.tbl_movie OWNER TO postgres;

--
-- TOC entry 2957 (class 0 OID 16385)
-- Dependencies: 202
-- Data for Name: tbl_movie; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_movie (id, judul, sutradara, aktor, tahun) FROM stdin;
1	Nanti Kita Cerita tentang Hari ini	Angga Dwimas Sasongko	Rio Dewanto, Sheila Dara Aisha, Rachel Amanda	2020
2	Abracadabra	Faozan Rizal	reza Rahadia, Salvita Decorte	2020
3	Akhir Kisah Cinta si Doel	Rano Karno	Rano Karno, Cornelia Agatha, Maudy Koesnaedy	2020
4	Mangga Muda	Girry Pratama	Tora Sudiro, Alexandra Gottardo, Gary Iskak	2020
5	Mangkujiwo	Azhar Kinoi Lubis	Yasamin Jasem, Asmara Abigail, Karina Suwandi	2020
\.


--
-- TOC entry 2830 (class 2606 OID 16392)
-- Name: tbl_movie tbl_movie_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_movie
    ADD CONSTRAINT tbl_movie_pkey PRIMARY KEY (id);


-- Completed on 2021-06-08 21:03:46 PDT

--
-- PostgreSQL database dump complete
--

